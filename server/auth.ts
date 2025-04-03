import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "bmsceplacementportal-secret-key-2025",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      // Set secure: false in all environments for Replit hosting
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await storage.getUserByUsername(username);
      if (!user || !(await comparePasswords(password, user.password))) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    }),
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id: number, done) => {
    const user = await storage.getUser(id);
    done(null, user);
  });

  app.post("/api/register", async (req, res, next) => {
    try {
      // Validate required fields
      if (!req.body.username || !req.body.password || !req.body.department) {
        return res.status(400).json({ message: "Username, password, and department are required" });
      }

      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const user = await storage.createUser({
        ...req.body,
        password: await hashPassword(req.body.password),
      });

      // Remove password from response
      const userResponse = { ...user, password: undefined };

      req.login(user, (err) => {
        if (err) return next(err);
        console.log("User registered successfully:", user.username);
        res.status(201).json(userResponse);
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Registration failed. Please try again." });
    }
  });

  app.post("/api/login", (req, res, next) => {
    try {
      // Validate request
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: "Username and password are required" });
      }

      passport.authenticate("local", (err: Error | null, user: Express.User | false, info: any) => {
        if (err) {
          console.error("Authentication error:", err);
          return next(err);
        }
        
        if (!user) {
          console.log("Login failed for user:", req.body.username);
          return res.status(401).json({ message: "Invalid username or password" });
        }
        
        req.login(user, (loginErr: Error) => {
          if (loginErr) {
            console.error("Login error:", loginErr);
            return next(loginErr);
          }
          
          // Remove password from response
          const userResponse = { ...user, password: undefined };
          
          console.log("User logged in successfully:", user.username);
          return res.status(200).json(userResponse);
        });
      })(req, res, next);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Login failed. Please try again." });
    }
  });

  app.post("/api/logout", (req, res, next) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(200).json({ message: "Not logged in" });
      }
      
      const username = req.user?.username;
      
      req.logout((err: Error | null) => {
        if (err) {
          console.error("Logout error:", err);
          return next(err);
        }
        
        // Explicitly destroy the session
        req.session.destroy((err) => {
          if (err) {
            console.error("Session destruction error:", err);
            return next(err);
          }
          
          console.log("User logged out successfully:", username);
          res.status(200).json({ message: "Logout successful" });
        });
      });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "Logout failed. Please try again." });
    }
  });

  app.get("/api/user", (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      // Remove password from response
      const user = req.user;
      const userResponse = { ...user, password: undefined };
      
      res.json(userResponse);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user information" });
    }
  });
}

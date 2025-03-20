import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertInterviewSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Department stats endpoints
  app.get("/api/departments", async (req, res) => {
    const stats = await storage.getDepartmentStats(req.query.department as string);
    res.json(stats);
  });

  // Mock interviews endpoints
  app.get("/api/interviews", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    const interviews = await storage.getInterviews(req.user.id);
    res.json(interviews);
  });

  app.post("/api/interviews", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    
    try {
      const data = insertInterviewSchema.parse({
        ...req.body,
        userId: req.user.id
      });
      const interview = await storage.createInterview(data);
      res.status(201).json(interview);
    } catch (error) {
      res.status(400).json({ error: "Invalid interview data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

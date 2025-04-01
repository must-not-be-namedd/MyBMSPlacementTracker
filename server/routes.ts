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
      // Convert the date string to a Date object before validation
      const requestData = {
        ...req.body,
        userId: req.user.id
      };
      
      // Convert date string to Date object if it's a string
      if (typeof requestData.date === 'string') {
        requestData.date = new Date(requestData.date);
      }
      
      // Validate the data
      const data = insertInterviewSchema.parse(requestData);
      
      // Create a Google Meet link if not provided
      if (!data.meetLink) {
        const meetId = Math.random().toString(36).substring(2, 10);
        data.meetLink = `https://meet.google.com/${meetId}`;
      }
      
      const interview = await storage.createInterview(data);
      res.status(201).json(interview);
    } catch (error) {
      console.error("Interview booking error:", error);
      res.status(400).json({ error: "Invalid interview data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

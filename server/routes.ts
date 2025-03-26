import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth endpoints
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      
      // For demo purposes, we'll create a mock user
      // In a real app, we would verify credentials against the database
      const mockUser = {
        id: 1,
        username: email.split('@')[0],
        name: email.split('@')[0],
        email
      };
      
      return res.status(200).json(mockUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
      }
      
      // For demo purposes, we'll create a mock user
      // In a real app, we would save to the database
      const mockUser = {
        id: 1,
        username: email.split('@')[0],
        name,
        email
      };
      
      return res.status(201).json(mockUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Learning progress endpoints
  app.post("/api/learning/progress", async (req, res) => {
    try {
      const { userId, moduleId, submoduleId, progress } = req.body;
      
      if (!userId || !moduleId || !submoduleId || progress === undefined) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // For demo purposes, we'll just return success
      // In a real app, we would save progress to the database
      return res.status(200).json({ 
        userId,
        moduleId,
        submoduleId,
        progress,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  app.get("/api/learning/progress/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      // For demo purposes, we'll return empty progress
      // In a real app, we would retrieve from the database
      return res.status(200).json([]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Quiz completion endpoint
  app.post("/api/learning/quiz-result", async (req, res) => {
    try {
      const { userId, moduleId, submoduleId, score, totalQuestions } = req.body;
      
      if (!userId || !moduleId || !submoduleId || score === undefined || !totalQuestions) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // For demo purposes, we'll just return success
      // In a real app, we would save results to the database
      return res.status(200).json({ 
        userId,
        moduleId,
        submoduleId,
        score,
        totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        passed: score >= (totalQuestions / 2), // Pass if score is at least 50%
        completedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Achievement endpoint
  app.post("/api/learning/achievement", async (req, res) => {
    try {
      const { userId, achievementId, achievementName } = req.body;
      
      if (!userId || !achievementId || !achievementName) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // For demo purposes, we'll just return success
      // In a real app, we would save to the database
      return res.status(200).json({ 
        userId,
        achievementId,
        achievementName,
        earnedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

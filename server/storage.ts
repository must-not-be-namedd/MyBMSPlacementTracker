import { User, InsertUser, Department, Interview, departments, interviews, users } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";
import connectPgSimple from "connect-pg-simple";
import { db } from "./db";
import { eq, and } from "drizzle-orm";
import { z } from "zod";

const MemoryStore = createMemoryStore(session);
const PostgresSessionStore = connectPgSimple(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDepartmentStats(department: string): Promise<Department[]>;
  createDepartmentStat(stat: Department): Promise<Department>;
  
  getInterviews(userId: number): Promise<Interview[]>;
  createInterview(interview: any): Promise<Interview>;
  
  sessionStore: session.Store;
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  public sessionStore: session.Store;

  constructor() {
    this.sessionStore = new PostgresSessionStore({
      conObject: {
        connectionString: process.env.DATABASE_URL,
      },
      createTableIfMissing: true
    });
    
    // Seed department stats if they don't already exist
    this.seedDepartmentStats();
  }

  private async seedDepartmentStats() {
    // Check if data already exists
    const existingStats = await db.select().from(departments).limit(1);
    
    if (existingStats.length === 0) {
      const departmentNames = ["Computer Science", "Information Science", "Electronics and Electrical", "Mechanical", "Civil"];
      const years = [2021, 2022, 2023];
      
      const statsToInsert = [];
      
      for (const year of years) {
        for (const dept of departmentNames) {
          statsToInsert.push({
            name: dept,
            highestPackage: Math.floor(Math.random() * 30 + 20),
            avgPackage: Math.floor(Math.random() * 15 + 8),
            placementRate: Math.floor(Math.random() * 30 + 70),
            year
          });
        }
      }
      
      if (statsToInsert.length > 0) {
        await db.insert(departments).values(statsToInsert);
      }
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getDepartmentStats(department?: string): Promise<Department[]> {
    if (department) {
      return await db.select().from(departments).where(eq(departments.name, department));
    }
    return await db.select().from(departments);
  }

  async createDepartmentStat(stat: Department): Promise<Department> {
    const [newStat] = await db.insert(departments).values(stat).returning();
    return newStat;
  }

  async getInterviews(userId: number): Promise<Interview[]> {
    return await db.select().from(interviews).where(eq(interviews.userId, userId));
  }

  async createInterview(interview: any): Promise<Interview> {
    // Ensure meetLink and status have proper values if they're undefined
    const interviewData = {
      ...interview,
      status: interview.status || "pending",
      meetLink: interview.meetLink || null
    };
    
    const [newInterview] = await db.insert(interviews).values(interviewData).returning();
    return newInterview;
  }
}

// Memory Storage Implementation (kept for reference)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private departmentStats: Map<number, Department>;
  private interviews: Map<number, Interview>;
  public sessionStore: session.Store;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.departmentStats = new Map();
    this.interviews = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000
    });

    // Seed some department stats
    this.seedDepartmentStats();
  }

  private seedDepartmentStats() {
    const departments = ["Computer Science", "Information Science", "Electronics and Electrical", "Mechanical", "Civil"];
    const years = [2021, 2022, 2023, 2024];
    
    // Base values for each department to ensure realistic trends
    const baseValues = {
      "Computer Science": { highest: 48, avg: 18, rate: 92 },
      "Information Science": { highest: 45, avg: 17, rate: 90 },
      "Electronics and Electrical": { highest: 40, avg: 15, rate: 85 },
      "Mechanical": { highest: 35, avg: 12, rate: 80 },
      "Civil": { highest: 30, avg: 10, rate: 75 }
    };
    
    // Generate data with year-on-year growth
    years.forEach((year, index) => {
      departments.forEach(dept => {
        // Base department values
        const base = baseValues[dept as keyof typeof baseValues];
        
        // Add yearly growth factor (increases each year)
        const growthFactor = 1 + (index * 0.05); // 5% increase each year
        
        this.createDepartmentStat({
          id: this.currentId++,
          name: dept,
          highestPackage: Math.floor(base.highest * growthFactor),
          avgPackage: Math.floor(base.avg * growthFactor),
          placementRate: Math.min(99, Math.floor(base.rate + (index * 2))), // Cap at 99%
          year
        });
      });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user = { ...insertUser, id, role: "student" };
    this.users.set(id, user);
    return user;
  }

  async getDepartmentStats(department?: string): Promise<Department[]> {
    const stats = Array.from(this.departmentStats.values());
    if (department) {
      return stats.filter(stat => stat.name === department);
    }
    return stats;
  }

  async createDepartmentStat(stat: Department): Promise<Department> {
    const id = this.currentId++;
    const newStat = { ...stat, id };
    this.departmentStats.set(id, newStat);
    return newStat;
  }

  async getInterviews(userId: number): Promise<Interview[]> {
    return Array.from(this.interviews.values()).filter(
      interview => interview.userId === userId
    );
  }

  async createInterview(interview: any): Promise<Interview> {
    const id = this.currentId++;
    const newInterview = { 
      ...interview, 
      id,
      status: interview.status || "pending",
      meetLink: interview.meetLink || null
    };
    this.interviews.set(id, newInterview);
    return newInterview;
  }
}

// Switch to the database storage implementation
// Temporarily using MemStorage instead of DatabaseStorage due to connection issues
export const storage = new MemStorage();

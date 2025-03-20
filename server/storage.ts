import { User, InsertUser, Department, Interview, departments, interviews } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDepartmentStats(department: string): Promise<Department[]>;
  createDepartmentStat(stat: Department): Promise<Department>;
  
  getInterviews(userId: number): Promise<Interview[]>;
  createInterview(interview: Interview): Promise<Interview>;
  
  sessionStore: session.Store;
}

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
    const years = [2021, 2022, 2023];
    
    years.forEach(year => {
      departments.forEach(dept => {
        this.createDepartmentStat({
          id: this.currentId++,
          name: dept,
          highestPackage: Math.floor(Math.random() * 30 + 20),
          avgPackage: Math.floor(Math.random() * 15 + 8),
          placementRate: Math.floor(Math.random() * 30 + 70),
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

  async createInterview(interview: Interview): Promise<Interview> {
    const id = this.currentId++;
    const newInterview = { ...interview, id };
    this.interviews.set(id, newInterview);
    return newInterview;
  }
}

export const storage = new MemStorage();

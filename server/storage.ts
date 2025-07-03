import { User, InsertUser, Department, Interview, Company, Alumni, Resource, FAQ, departments, interviews, users, companies, alumni, resources, faqs } from "@shared/schema";
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
  
  getDepartmentStats(department?: string): Promise<Department[]>;
  createDepartmentStat(stat: Department): Promise<Department>;
  
  getInterviews(userId: number): Promise<Interview[]>;
  createInterview(interview: any): Promise<Interview>;
  
  getCompanies(): Promise<Company[]>;
  createCompany(company: Company): Promise<Company>;
  
  getAlumni(): Promise<Alumni[]>;
  createAlumni(alumni: Alumni): Promise<Alumni>;
  
  getResources(): Promise<Resource[]>;
  createResource(resource: Resource): Promise<Resource>;
  
  getFAQs(): Promise<FAQ[]>;
  createFAQ(faq: FAQ): Promise<FAQ>;
  
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
    
    // Seed data if they don't already exist with error handling
    this.initializeData();
  }

  private async initializeData() {
    try {
      await this.seedDepartmentStats();
      await this.seedCompanies();
      await this.seedAlumni();
      await this.seedResources();
      await this.seedFAQs();
    } catch (error) {
      console.error('Error initializing data:', error);
      // Continue without seeding if there are errors
    }
  }

  private async seedDepartmentStats() {
    // Check if data already exists
    const existingStats = await db.select().from(departments).limit(1);
    
    if (existingStats.length === 0) {
      const departmentNames = ["Computer Science", "Information Science", "Electronics and Electrical", "Mechanical", "Civil"];
      const years = Array.from({length: 16}, (_, i) => 2010 + i); // 2010-2025
      
      const statsToInsert = [];
      
      for (const year of years) {
        for (const dept of departmentNames) {
          // Ensure packages don't exceed 52 LPA, with gradual increase over years
          const baseMultiplier = Math.max(1, (year - 2010) * 0.1 + 1);
          const maxPackage = Math.min(52, Math.floor((Math.random() * 25 + 15) * baseMultiplier));
          const avgPackage = Math.floor(maxPackage * 0.4 + Math.random() * 5);
          
          statsToInsert.push({
            name: dept,
            highestPackage: maxPackage,
            avgPackage: avgPackage,
            placementRate: Math.floor(Math.random() * 25 + 75), // 75-100%
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

  async getCompanies(): Promise<Company[]> {
    return await db.select().from(companies);
  }

  async createCompany(company: Company): Promise<Company> {
    const [newCompany] = await db.insert(companies).values(company).returning();
    return newCompany;
  }

  async getAlumni(): Promise<Alumni[]> {
    return await db.select().from(alumni);
  }

  async createAlumni(alumniData: Alumni): Promise<Alumni> {
    const [newAlumni] = await db.insert(alumni).values(alumniData).returning();
    return newAlumni;
  }

  async getResources(): Promise<Resource[]> {
    return await db.select().from(resources);
  }

  async createResource(resource: Resource): Promise<Resource> {
    const [newResource] = await db.insert(resources).values(resource).returning();
    return newResource;
  }

  async getFAQs(): Promise<FAQ[]> {
    return await db.select().from(faqs);
  }

  async createFAQ(faq: FAQ): Promise<FAQ> {
    const [newFAQ] = await db.insert(faqs).values(faq).returning();
    return newFAQ;
  }

  private async seedCompanies() {
    const existingCompanies = await db.select().from(companies).limit(1);
    
    if (existingCompanies.length === 0) {
      const indianCompanies = [
        {
          name: "Tata Consultancy Services",
          visitCount: 25,
          avgPackage: 350000,
          description: "Leading IT services, consulting and business solutions company in India",
          sector: "Information Technology",
          logo: "tcs-logo.png"
        },
        {
          name: "Infosys",
          visitCount: 22,
          avgPackage: 420000,
          description: "Global leader in next-generation digital services and consulting",
          sector: "Information Technology",
          logo: "infosys-logo.png"
        },
        {
          name: "Wipro",
          visitCount: 18,
          avgPackage: 380000,
          description: "Leading global information technology, consulting and business process services company",
          sector: "Information Technology",
          logo: "wipro-logo.png"
        },
        {
          name: "HCL Technologies",
          visitCount: 15,
          avgPackage: 450000,
          description: "Leading global technology company that helps enterprises reimagine their businesses",
          sector: "Information Technology",
          logo: "hcl-logo.png"
        },
        {
          name: "Tech Mahindra",
          visitCount: 12,
          avgPackage: 400000,
          description: "Leading provider of digital transformation, consulting and business re-engineering services",
          sector: "Information Technology",
          logo: "techmahindra-logo.png"
        },
        {
          name: "Larsen & Toubro",
          visitCount: 10,
          avgPackage: 520000,
          description: "Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and Services",
          sector: "Engineering & Construction",
          logo: "lt-logo.png"
        },
        {
          name: "Flipkart",
          visitCount: 8,
          avgPackage: 1200000,
          description: "Leading e-commerce marketplace in India",
          sector: "E-commerce",
          logo: "flipkart-logo.png"
        },
        {
          name: "Amazon India",
          visitCount: 7,
          avgPackage: 1800000,
          description: "Global e-commerce and cloud computing giant's India operations",
          sector: "E-commerce & Cloud",
          logo: "amazon-logo.png"
        },
        {
          name: "Paytm",
          visitCount: 6,
          avgPackage: 900000,
          description: "Leading digital payments and financial services company in India",
          sector: "Fintech",
          logo: "paytm-logo.png"
        },
        {
          name: "Zomato",
          visitCount: 5,
          avgPackage: 1100000,
          description: "Indian multinational restaurant aggregator and food delivery company",
          sector: "Food Tech",
          logo: "zomato-logo.png"
        }
      ];

      await db.insert(companies).values(indianCompanies);
    }
  }

  private async seedAlumni() {
    const existingAlumni = await db.select().from(alumni).limit(1);
    
    if (existingAlumni.length === 0) {
      const alumniData = [
        {
          name: "Rajesh Kumar",
          department: "Computer Science",
          graduationYear: 2020,
          currentCompany: "Google India",
          position: "Software Engineer",
          email: "rajesh.kumar@gmail.com",
          linkedin: "https://linkedin.com/in/rajesh-kumar-cs",
          profileImage: "rajesh-profile.jpg"
        },
        {
          name: "Priya Sharma",
          department: "Information Science",
          graduationYear: 2019,
          currentCompany: "Microsoft India",
          position: "Senior Software Developer",
          email: "priya.sharma@outlook.com",
          linkedin: "https://linkedin.com/in/priya-sharma-is",
          profileImage: "priya-profile.jpg"
        },
        {
          name: "Arjun Patel",
          department: "Computer Science",
          graduationYear: 2021,
          currentCompany: "Amazon India",
          position: "Software Development Engineer",
          email: "arjun.patel@amazon.com",
          linkedin: "https://linkedin.com/in/arjun-patel-sde",
          profileImage: "arjun-profile.jpg"
        },
        {
          name: "Sneha Reddy",
          department: "Electronics and Electrical",
          graduationYear: 2018,
          currentCompany: "Intel India",
          position: "Hardware Engineer",
          email: "sneha.reddy@intel.com",
          linkedin: "https://linkedin.com/in/sneha-reddy-ee",
          profileImage: "sneha-profile.jpg"
        },
        {
          name: "Karthik Nair",
          department: "Mechanical",
          graduationYear: 2017,
          currentCompany: "Tata Motors",
          position: "Design Engineer",
          email: "karthik.nair@tatamotors.com",
          linkedin: "https://linkedin.com/in/karthik-nair-mech",
          profileImage: "karthik-profile.jpg"
        }
      ];

      await db.insert(alumni).values(alumniData);
    }
  }

  private async seedResources() {
    const existingResources = await db.select().from(resources).limit(1);
    
    if (existingResources.length === 0) {
      const resourcesData = [
        {
          title: "LeetCode",
          description: "Platform for coding practice with algorithm and data structure problems",
          url: "https://leetcode.com",
          category: "Coding Practice",
          difficulty: "All Levels"
        },
        {
          title: "GeeksforGeeks",
          description: "Computer science portal with articles, tutorials and practice problems",
          url: "https://geeksforgeeks.org",
          category: "Learning Platform",
          difficulty: "Beginner to Advanced"
        },
        {
          title: "HackerRank",
          description: "Technical skills assessment and coding challenges platform",
          url: "https://hackerrank.com",
          category: "Coding Practice",
          difficulty: "All Levels"
        },
        {
          title: "CodeChef",
          description: "Competitive programming platform with contests and practice problems",
          url: "https://codechef.com",
          category: "Competitive Programming",
          difficulty: "Beginner to Expert"
        },
        {
          title: "InterviewBit",
          description: "Interview preparation platform with coding questions and mock interviews",
          url: "https://interviewbit.com",
          category: "Interview Preparation",
          difficulty: "Intermediate"
        },
        {
          title: "Codeforces",
          description: "Programming competitions and algorithmic challenges platform",
          url: "https://codeforces.com",
          category: "Competitive Programming",
          difficulty: "Advanced"
        },
        {
          title: "System Design Primer",
          description: "GitHub repository for learning system design concepts",
          url: "https://github.com/donnemartin/system-design-primer",
          category: "System Design",
          difficulty: "Advanced"
        },
        {
          title: "Cracking the Coding Interview",
          description: "Popular book and resource guide for technical interviews",
          url: "https://crackingthecodinginterview.com",
          category: "Interview Preparation",
          difficulty: "All Levels"
        }
      ];

      await db.insert(resources).values(resourcesData);
    }
  }

  private async seedFAQs() {
    const existingFAQs = await db.select().from(faqs).limit(1);
    
    if (existingFAQs.length === 0) {
      const faqsData = [
        {
          question: "What is the average placement rate at BMSCE?",
          answer: "BMSCE consistently achieves placement rates above 85% across all departments. Computer Science and Information Science departments typically see placement rates of 90-95%, while other engineering departments maintain rates between 80-90%.",
          category: "Placement Statistics"
        },
        {
          question: "Which companies visit BMSCE for placements?",
          answer: "Top Indian IT companies like TCS, Infosys, Wipro, HCL Technologies, and Tech Mahindra regularly visit our campus. We also host product-based companies like Flipkart, Amazon India, Paytm, and Zomato. Additionally, core engineering companies like L&T, Bosch, and Tata Motors recruit from relevant departments.",
          category: "Companies"
        },
        {
          question: "What is the highest package offered at BMSCE?",
          answer: "The highest package offered varies by year and department. Recent years have seen packages ranging from ₹18-50 LPA for computer science roles at top tech companies. The average highest package across all departments is typically around ₹25-35 LPA.",
          category: "Salary Packages"
        },
        {
          question: "How should I prepare for placement interviews?",
          answer: "Focus on data structures and algorithms, practice coding problems on platforms like LeetCode and GeeksforGeeks, brush up on computer science fundamentals, work on projects that showcase your skills, and practice mock interviews. Our placement cell also conducts regular training sessions and mock interviews.",
          category: "Interview Preparation"
        },
        {
          question: "Are there any eligibility criteria for placements?",
          answer: "Most companies require a minimum CGPA of 6.0-7.0 with no active backlogs. Some companies may have higher CGPA requirements (7.5-8.0) or specific criteria for 10th/12th marks. It's important to maintain good academic performance throughout your degree.",
          category: "Eligibility"
        },
        {
          question: "Does BMSCE provide internship opportunities?",
          answer: "Yes, BMSCE has tie-ups with various companies for internship programs. We organize internship drives during the 6th and 7th semesters. Many students also secure internships through personal networking, online applications, and our alumni network.",
          category: "Internships"
        },
        {
          question: "How can I improve my chances of getting placed?",
          answer: "Maintain good academic performance, develop strong programming skills, work on relevant projects, participate in hackathons and competitions, build a strong resume, practice communication skills, and actively participate in placement preparation activities organized by the college.",
          category: "Placement Tips"
        },
        {
          question: "What support does the placement cell provide?",
          answer: "The placement cell provides comprehensive support including resume building workshops, mock interviews, aptitude test preparation, communication skills training, company-specific preparation sessions, and career guidance counseling. We also maintain strong industry connections to bring quality opportunities to students.",
          category: "Support Services"
        }
      ];

      await db.insert(faqs).values(faqsData);
    }
  }
}

// Memory Storage Implementation (kept for reference)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private departmentStats: Map<number, Department>;
  private interviews: Map<number, Interview>;
  private companies: Map<number, Company>;
  private alumni: Map<number, Alumni>;
  private resources: Map<number, Resource>;
  private faqs: Map<number, FAQ>;
  public sessionStore: session.Store;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.departmentStats = new Map();
    this.interviews = new Map();
    this.companies = new Map();
    this.alumni = new Map();
    this.resources = new Map();
    this.faqs = new Map();
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

  async getCompanies(): Promise<Company[]> {
    return Array.from(this.companies.values());
  }

  async createCompany(company: Company): Promise<Company> {
    const id = this.currentId++;
    const newCompany = { ...company, id };
    this.companies.set(id, newCompany);
    return newCompany;
  }

  async getAlumni(): Promise<Alumni[]> {
    return Array.from(this.alumni.values());
  }

  async createAlumni(alumni: Alumni): Promise<Alumni> {
    const id = this.currentId++;
    const newAlumni = { ...alumni, id };
    this.alumni.set(id, newAlumni);
    return newAlumni;
  }

  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async createResource(resource: Resource): Promise<Resource> {
    const id = this.currentId++;
    const newResource = { ...resource, id };
    this.resources.set(id, newResource);
    return newResource;
  }

  async getFAQs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values());
  }

  async createFAQ(faq: FAQ): Promise<FAQ> {
    const id = this.currentId++;
    const newFAQ = { ...faq, id };
    this.faqs.set(id, newFAQ);
    return newFAQ;
  }
}

// Switch to the database storage implementation
export const storage = new DatabaseStorage();

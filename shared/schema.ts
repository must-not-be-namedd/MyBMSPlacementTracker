import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  department: text("department").notNull(),
  role: text("role").default("student")
});

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  highestPackage: integer("highest_package").notNull(),
  avgPackage: integer("avg_package").notNull(),
  placementRate: integer("placement_rate").notNull(),
  year: integer("year").notNull()
});

export const interviews = pgTable("interviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  date: timestamp("date").notNull(),
  status: text("status").default("pending"),
  type: text("type").notNull(),
  meetLink: text("meet_link")
});

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  visitCount: integer("visit_count").default(0),
  avgPackage: integer("avg_package").notNull(),
  description: text("description").notNull(),
  sector: text("sector").notNull(),
  logo: text("logo")
});

export const alumni = pgTable("alumni", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  department: text("department").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  currentCompany: text("current_company").notNull(),
  position: text("position").notNull(),
  email: text("email").notNull(),
  linkedin: text("linkedin").notNull(),
  profileImage: text("profile_image")
});

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull()
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category").notNull()
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  interviews: many(interviews)
}));

export const interviewsRelations = relations(interviews, ({ one }) => ({
  user: one(users)
}));

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  department: true
});

export const insertDepartmentSchema = createInsertSchema(departments);

// Create the interview schema with date handling
const baseInterviewSchema = createInsertSchema(interviews).omit({
  id: true
});

export const insertInterviewSchema = baseInterviewSchema.extend({
  date: z.coerce.date(),
});

export const insertCompanySchema = createInsertSchema(companies);
export const insertAlumniSchema = createInsertSchema(alumni);
export const insertResourceSchema = createInsertSchema(resources);
export const insertFaqSchema = createInsertSchema(faqs);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type Interview = typeof interviews.$inferSelect;
export type Company = typeof companies.$inferSelect;
export type Alumni = typeof alumni.$inferSelect;
export type Resource = typeof resources.$inferSelect;
export type FAQ = typeof faqs.$inferSelect;

export type SelectUser = User;
export type InsertCompany = z.infer<typeof insertCompanySchema>;
export type InsertAlumni = z.infer<typeof insertAlumniSchema>;
export type InsertResource = z.infer<typeof insertResourceSchema>;
export type InsertFAQ = z.infer<typeof insertFaqSchema>;

export const departmentsList = [
  "Computer Science & Engineering",
  "Information Science",
  "Electronics and Electrical",
  "Mechanical",
  "Civil",
  "Biotechnology"
] as const;

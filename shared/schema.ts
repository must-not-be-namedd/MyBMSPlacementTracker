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
  type: text("type").notNull()
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
export const insertInterviewSchema = createInsertSchema(interviews);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type Interview = typeof interviews.$inferSelect;

export const departmentsList = [
  "Computer Science",
  "Information Science",
  "Electronics and Electrical",
  "Mechanical",
  "Civil"
] as const;

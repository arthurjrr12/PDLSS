import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  profilePicture: text("profile_picture"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  profilePicture: true,
});

// Learning progress table
export const learningProgress = pgTable("learning_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  moduleId: integer("module_id").notNull(),
  submoduleId: integer("submodule_id").notNull(),
  progress: integer("progress").notNull(), // 0-100 percentage
  completed: boolean("completed").default(false).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertLearningProgressSchema = createInsertSchema(learningProgress).pick({
  userId: true,
  moduleId: true,
  submoduleId: true,
  progress: true,
  completed: true,
});

// Quiz results table
export const quizResults = pgTable("quiz_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  moduleId: integer("module_id").notNull(),
  submoduleId: integer("submodule_id").notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  passed: boolean("passed").notNull(),
  completedAt: timestamp("completed_at").defaultNow().notNull(),
});

export const insertQuizResultSchema = createInsertSchema(quizResults).pick({
  userId: true,
  moduleId: true,
  submoduleId: true,
  score: true,
  totalQuestions: true,
  passed: true,
});

// User achievements table
export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  achievementId: text("achievement_id").notNull(),
  achievementName: text("achievement_name").notNull(),
  earnedAt: timestamp("earned_at").defaultNow().notNull(),
});

export const insertAchievementSchema = createInsertSchema(achievements).pick({
  userId: true,
  achievementId: true,
  achievementName: true,
});

// Career paths table
export const careerPaths = pgTable("career_paths", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  careerPath: text("career_path").notNull(),
  selectedAt: timestamp("selected_at").defaultNow().notNull(),
});

export const insertCareerPathSchema = createInsertSchema(careerPaths).pick({
  userId: true,
  careerPath: true,
});

// Type exports
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type LearningProgress = typeof learningProgress.$inferSelect;
export type InsertLearningProgress = z.infer<typeof insertLearningProgressSchema>;

export type QuizResult = typeof quizResults.$inferSelect;
export type InsertQuizResult = z.infer<typeof insertQuizResultSchema>;

export type Achievement = typeof achievements.$inferSelect;
export type InsertAchievement = z.infer<typeof insertAchievementSchema>;

export type CareerPath = typeof careerPaths.$inferSelect;
export type InsertCareerPath = z.infer<typeof insertCareerPathSchema>;

import { relations } from 'drizzle-orm';
import { pgTable, serial, text, boolean, integer } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  important: boolean('important').notNull().default(false),
  userId: integer('user_id').references(() => users.id),
});
export type Note = typeof notes.$inferSelect;

export const blogs = pgTable('blogs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  url: text('url').notNull(),
  likes: integer('likes').notNull().default(0),
  userId: integer('user_id').references(() => users.id),
});
export type Blog = typeof blogs.$inferSelect;

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  name: text('name').notNull(),
});
export type User = typeof users.$inferSelect;

export const userRelations = relations(users, ({ many }) => ({
  notes: many(notes),
  blogs: many(blogs),
}));

export const noteRelations = relations(notes, ({ one }) => ({
  user: one(users, {
    fields: [notes.userId],
    references: [users.id],
  }),
}));

export const blogRelations = relations(blogs, ({ one }) => ({
  user: one(users, {
    fields: [blogs.userId],
    references: [users.id],
  }),
}));

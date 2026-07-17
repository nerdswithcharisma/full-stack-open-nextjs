import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getUsers = async () => {
  return await db.query.users.findMany();
};

export const getUserWithNotesAndBlogs = async (username: string) => {
  return await db.query.users.findFirst({
    where: eq(users.username, decodeURIComponent(username)),
    with: { notes: true, blogs: true },
  });
};

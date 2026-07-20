'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const registerUser = async (
  prevState: {
    errors?: { username?: string; name?: string; password?: string };
  },
  formData: FormData,
) => {
  // get form data
  const username = (formData.get('username') as string)?.trim();
  const name = (formData.get('name') as string)?.trim();
  const password = (formData.get('password') as string)?.trim();
  const passwordConfirm = (formData.get('confirmPassword') as string)?.trim();
  const passwordHash = await bcrypt.hash(password, 10);

  const errors: { username?: string; name?: string; password?: string } = {};
  if (!username || username.length < 4)
    errors.username = 'Username must be at least 4 characters long';
  if (!name || name.length < 4)
    errors.name = 'Name must be at least 4 characters long';
  if (!password || password.length < 4)
    errors.password = 'Password must be at least 4 characters long';
  if (password !== passwordConfirm) errors.password = 'Passwords do not match';

  if (Object.keys(errors).length > 0)
    return { errors, values: { username, name, password } };

  // if user is already registered, return error
  const existingUser = await db.query.users.findFirst({
    where: eq(users.username, username),
  });
  if (existingUser) {
    errors.username = 'Username already exists';
    return { errors, values: { username, name, password } };
  }
  // add to db
  await db.insert(users).values({
    username,
    name,
    passwordHash,
  });

  //redirect to login
  redirect('/login');
};

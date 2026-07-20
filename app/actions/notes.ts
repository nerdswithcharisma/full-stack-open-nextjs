'use server';

import { redirect } from 'next/navigation';
import { addNote, toggleImportance } from '../services/notes';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { db } from '@/db';
import { notes } from '@/db/schema';
import { getCurrentUser } from '../services/session';

export const createNote = async (
  prevState: { error?: string },
  formData: FormData,
) => {
  const session = await auth();
  if (!session) redirect('/login');

  const content = formData.get('content') as string;
  if (!content || content.length < 10)
    return { error: 'Content must be at least 10 characters long' };

  const important = formData.get('important') as unknown as boolean;

  await addNote(content, important);
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Not logged in');
  }

  await db.insert(notes).values({ content, important, userId: user.id });
};

export const toggleNoteImportance = async (formData: FormData) => {
  const id = formData.get('id') as string;
  await toggleImportance(parseInt(id));

  revalidatePath('/notes');
  redirect(`/notes/${id}`);
};

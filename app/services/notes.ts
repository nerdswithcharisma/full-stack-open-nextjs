import { db } from '@/db';
import { notes } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getNotes = async (importantOnly: boolean) => {
  console.log(importantOnly);
  if (importantOnly) {
    return db.query.notes.findMany({
      where: eq(notes.important, true),
    });
  }

  return db.query.notes.findMany();
};

export const getNoteById = async (id: number) => {
  return db.query.notes.findFirst({
    where: eq(notes.id, id),
  });
};

export const addNote = async (content: string, important: boolean) => {
  await db.insert(notes).values({ content, important });
};

export const toggleImportance = async (id: number) => {
  const note = await getNoteById(id);

  if (note) {
    console.log('🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊 updating');
    await db
      .update(notes)
      .set({ important: !note.important })
      .where(eq(notes.id, id));
  }

  // const note = notes.find((note) => note.id === id);
  // if (note) note.important = !note.important;
};

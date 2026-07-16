'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addBlogPost } from '../services/blogs';

export const createBlogPost = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const url = formData.get('url') as string;

  addBlogPost(title, author, url);
  revalidatePath('/blogs');
  redirect('/blogs');
};

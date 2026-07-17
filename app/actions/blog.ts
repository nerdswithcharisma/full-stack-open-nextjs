'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addBlogPost, toggleLike } from '../services/blogs';

export const createBlogPost = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const url = formData.get('url') as string;

  addBlogPost(title, author, url);
  revalidatePath('/blogs');
  redirect('/blogs');
};

export const toggleBlogLike = async (formData: FormData) => {
  const id = formData.get('id') as string;
  // toggle like
  toggleLike(parseInt(id));
  revalidatePath('/blogs');
  redirect(`/blogs/${id}`);
};

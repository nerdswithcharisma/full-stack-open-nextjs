'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addBlogPost, toggleLike } from '../services/blogs';

export const createBlogPost = async (
  prevState: { error?: string },
  formData: FormData,
) => {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const url = formData.get('url') as string;

  const errors: { title?: string; author?: string; url?: string } = {};
  if (!title || title.length < 5)
    errors.title = 'Title must be at least 5 characters long';
  if (!author || author.length < 5)
    errors.author = 'Author must be at least 5 characters long';
  if (!url || url.length < 5)
    errors.url = 'URL must be at least 5 characters long';

  if (Object.keys(errors).length > 0)
    return { errors, values: { title, author, url } };

  await addBlogPost(title, author, url);
  revalidatePath('/blogs');
  redirect('/blogs');
};

export const toggleBlogLike = async (formData: FormData) => {
  const id = formData.get('id') as string;
  await toggleLike(parseInt(id));
  revalidatePath('/blogs');
  revalidatePath(`/blogs/${id}`);
  redirect(`/blogs/${id}`);
};

export const filterBlogAction = async (formData: FormData) => {
  const filter = formData.get('filter') as string;
  redirect(`/blogs?filter=${encodeURIComponent(filter)}`);
};

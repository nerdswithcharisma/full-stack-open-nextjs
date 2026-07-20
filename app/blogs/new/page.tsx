'use client';

import { createBlogPost } from '@/app/actions/blog';
import { useActionState, useState } from 'react';

const NewBlog = () => {
  const [state, formAction] = useActionState(createBlogPost, { error: '' });

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  return (
    <div>
      <h2>Create a new blog post</h2>
      <form action={formAction}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              required
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {state.errors.title && (
              <p style={{ color: 'red' }}>{state.errors.title}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Author
            <input
              type="text"
              name="author"
              required
              defaultValue={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {state.errors.author && (
              <p style={{ color: 'red' }}>{state.errors.author}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            URL
            <input
              type="text"
              name="url"
              required
              defaultValue={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {state.errors.url && (
              <p style={{ color: 'red' }}>{state.errors.url}</p>
            )}
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default NewBlog;

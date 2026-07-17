import Link from 'next/link';
import { filterBlogs, getBlogs } from '../services/blogs';
import { filterBlogAction } from '../actions/blog';

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;
  const allBlogs = await getBlogs();
  let blogs = allBlogs;

  if (filter) blogs = await filterBlogs(filter);
  blogs.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <form action={filterBlogAction}>
        <input type="text" name="filter" defaultValue={filter} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> ({blog.likes})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;

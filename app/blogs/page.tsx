import { getBlogs } from '../services/blogs';

const Blogs = () => {
  const blogs = getBlogs();
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;

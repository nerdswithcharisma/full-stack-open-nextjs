const blogs = [
  {
    id: 1,
    title: 'Deep dive into the Jurassic Park opening credits',
    author: 'Brian Dausman',
    url: '/blogs/1',
    likes: 0,
  },
  {
    id: 2,
    title: 'The Raptor Attack',
    author: 'Brian Dausman',
    url: '/blogs/2',
    likes: 0,
  },
  {
    id: 3,
    title: 'The amber mine',
    author: 'Brian Dausman',
    url: '/blogs/3',
    likes: 0,
  },
];

export const getBlogs = () => {
  return blogs;
};

export const addBlogPost = (title: string, author: string, url: string) => {
  blogs.push({ id: blogs.length + 1, title, author, url, likes: 0 });
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};

export const toggleLike = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) blog.likes++;
};

export const filterBlogs = (filter: string) => {
  return blogs.filter((blog) =>
    blog.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

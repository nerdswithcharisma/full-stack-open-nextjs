import { notFound } from 'next/navigation';
import { getBlogById } from '@/app/services/blogs';
import { toggleBlogLike } from '@/app/actions/blog';

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = getBlogById(Number(id));

  if (!post) notFound();

  return (
    <div data-id="BlogPage">
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.url}</p>
      <p>{post.likes}</p>

      <form action={toggleBlogLike}>
        <button type="submit">Like</button>
        <input type="hidden" name="id" value={post.id} />
      </form>
    </div>
  );
};

export default BlogPage;

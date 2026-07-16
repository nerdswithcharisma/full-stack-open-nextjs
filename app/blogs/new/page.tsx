import { createBlogPost } from '@/app/actions/blog';
import { url } from 'inspector';
import { title } from 'process';

const NewBlog = () => {
  return (
    <div>
      <h2>Create a new blog post</h2>
      <form action={createBlogPost}>
        <div>
          <label>
            Title
            <input type="text" name="title" required />
          </label>
        </div>
        <div>
          <label>
            Author
            <input type="text" name="author" required />
          </label>
        </div>
        <div>
          <label>
            URL
            <input type="text" name="url" required />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default NewBlog;

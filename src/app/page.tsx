import Blog from "@/components/common/blog";
import { getBlogs } from "@/server-actions/blogs";
import { Blog as BlogType } from "@/types/Blogs";

export default async function Home() {
  const data = await getBlogs();
  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {data.map((blog: BlogType) => (
          <Blog
            title={blog.title}
            body={blog.body}
            key={blog.id}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
}

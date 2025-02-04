import { getBlogById } from "@/server-actions/blogs";
import PostData from "@/components/Post/PostData";
import { Blog } from "@/types/Blogs";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const id = (await params).postId;
  const data: Blog = await getBlogById(parseInt(id));
  console.log(data);

  return <PostData {...data} />;
}

import { Blog as BlogType } from "@/types/Blogs";
import Link from "next/link";
import React from "react";

export default function Blog({ title, body, id }: BlogType) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="border p-2 w-full max-w-[95vw] mx-2 rounded-lg border-black  my-5 h-full">
        <h1 className="font-bold text-2xl  mb-4">{title}</h1>
        <p className="text-gray-500">{body}</p>
      </div>
    </Link>
  );
}

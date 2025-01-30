import { Blog } from "@/types/Blogs";
import React from "react";

export default function PostData({ title, body, id }: Blog) {
  return (
    <div className="mx-3 mt-5 mb-5">
      <h1 className="text-3xl font-bold ">
        {" "}
        #{id} {title}
      </h1>
      <p className="mt-5 text-gray-500">{body}</p>
    </div>
  );
}

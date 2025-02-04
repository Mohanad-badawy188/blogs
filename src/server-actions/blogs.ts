"use server";

import { api } from "@/helpers/api";

export const getBlogs = async () => {
  const data = await api({ url: "/posts" });
  return data.json();
};
export const getBlogById = async (id: number) => {
  const data = await api({ url: `/posts/${id}` });
  return data.json();
};

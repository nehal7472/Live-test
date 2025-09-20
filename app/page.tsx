"use client";

import { useState } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "@/lib/api";

export default function Home() {
  const [result, setResult] = useState<any>(null);

  const handleGet = async () => {
    const data = await getPosts();
    setResult(data.slice(0, 3)); // show first 3 posts
  };

  const handlePost = async () => {
    const data = await createPost({
      title: "New Post",
      body: "Hello world",
      userId: 1,
    });
    setResult(data);
  };

  const handlePut = async () => {
    const data = await updatePost(1, {
      title: "Updated Post",
      body: "Replaced content",
      userId: 1,
    });
    setResult(data);
  };

  const handlePatch = async () => {
    const data = await patchPost(1, { title: "Patched Title" });
    setResult(data);
  };

  const handleDelete = async () => {
    const ok = await deletePost(1);
    setResult({ deleted: ok });
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Next.js API Integration</h1>

      <div className="flex gap-4 my-4">
        <button
          onClick={handleGet}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          GET
        </button>
        <button
          onClick={handlePost}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          POST
        </button>
        <button
          onClick={handlePut}
          className="bg-yellow-500 text-black px-3 py-2 rounded"
        >
          PUT
        </button>
        <button
          onClick={handlePatch}
          className="bg-purple-500 text-white px-3 py-2 rounded"
        >
          PATCH
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          DELETE
        </button>
      </div>

      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}

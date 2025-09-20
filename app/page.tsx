/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "@/lib/api";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Next.js API Integration Demo
      </h1>

      {/* Action Buttons */}
      <Card className="shadow-md mb-6">
        <CardContent className="flex flex-wrap gap-3 p-4 justify-center">
          <Button variant="default" onClick={handleGet}>
            GET
          </Button>
          <Button variant="secondary" onClick={handlePost}>
            POST
          </Button>
          <Button variant="outline" onClick={handlePut}>
            PUT
          </Button>
          <Button
            variant="default"
            className="bg-purple-600"
            onClick={handlePatch}
          >
            PATCH
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            DELETE
          </Button>
        </CardContent>
      </Card>

      {/* Result Box */}
      <Card className="shadow-md">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Result</h2>
          <ScrollArea className="h-72 rounded border p-3 bg-muted">
            <pre className="text-sm">
              {result ? JSON.stringify(result, null, 2) : "No data yet..."}
            </pre>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

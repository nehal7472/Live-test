export const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET all posts
export async function getPosts() {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

// POST new post
export async function createPost(post: { title: string; body: string; userId: number }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
}

// PUT update whole post
export async function updatePost(id: number, post: { title: string; body: string; userId: number }) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
}

// PATCH update single field
export async function patchPost(id: number, data: Partial<{ title: string; body: string; userId: number }>) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE 
export async function deletePost(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}

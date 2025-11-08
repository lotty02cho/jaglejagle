'use client';
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    try {
      const data = typeof window !== 'undefined' ? localStorage.getItem('posts') : null;
      setPosts(data ? JSON.parse(data) : []);
    } catch (e) {
      setPosts([]);
    }
  }, []);

  return (
    <main className="max-w-md mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">내가 쓴 글 목록</h1>
      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
          아직 작성한 글이 없어요.
          <div className="mt-4">
            <a href="/write">
              <button className="px-6 py-3 rounded-lg bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition">지금 쓰기</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded p-4 bg-white shadow">
              <div className="font-bold text-lg">{post.title}</div>
              <div className="text-sm text-gray-500">{post.date} | {post.location}</div>
              <div className="mt-2">{post.menu} / {post.price}</div>
              <div className="mt-1 text-orange-600">{post.comment}</div>
            </div>
          ))}
        </div>
      )}
      <a href="/write">
        <button className="mt-8 px-6 py-3 rounded-lg bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition">새 글쓰기</button>
      </a>
    </main>
  );
}

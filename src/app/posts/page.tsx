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

  const deletePost = (id: string) => {
    try {
      const ok = confirm('정말 삭제하시겠어요?');
      if (!ok) return;
      const next = posts.filter((p) => String(p.id) !== String(id));
      setPosts(next);
      if (typeof window !== 'undefined') localStorage.setItem('posts', JSON.stringify(next));
    } catch (e) {}
  };

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
            <div key={post.id} className="border rounded p-4 bg-white shadow hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {post.thumbnail ? (
                  <img src={post.thumbnail} alt={post.title} className="h-16 w-16 object-cover rounded border" />
                ) : (
                  <div className="h-16 w-16 flex items-center justify-center bg-gray-100 text-gray-400 text-xs rounded border">No Img</div>
                )}
                <a href={`/posts/${post.id}`} className="flex-1 min-w-0">
                  <div className="font-bold text-lg line-clamp-1">{post.title}</div>
                  <div className="text-sm text-gray-500">{post.date} | {post.location}</div>
                  <div className="mt-1 text-orange-600 text-sm line-clamp-1">{post.comment}</div>
                </a>
                <button
                  className="ml-2 p-2 rounded hover:bg-red-50 active:bg-red-100"
                  aria-label="삭제"
                  title="삭제"
                  onClick={() => deletePost(post.id)}
                >
                  {/* trash icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-500">
                    <path fillRule="evenodd" d="M9 3.75A2.25 2.25 0 0 1 11.25 1.5h1.5A2.25 2.25 0 0 1 15 3.75V4.5h3.75a.75.75 0 0 1 0 1.5h-.51l-1.07 13.374A3.75 3.75 0 0 1 12.43 23.1h-.86a3.75 3.75 0 0 1-3.99-3.726L6.51 6H6.75a.75.75 0 0 1 0-1.5H9V3.75Zm1.5.75V3.75c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75V4.5h-3Zm-2.99 1.5 1.03 12.843a2.25 2.25 0 0 0 2.395 2.232h.83a2.25 2.25 0 0 0 2.395-2.232L15.49 6H7.51Z" clipRule="evenodd" />
                    <path d="M9.75 9.75a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5Zm3.75-.75a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75Z" />
                  </svg>
                </button>
              </div>
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

"use client";
import { useEffect, useState } from 'react';

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    try {
      const data = typeof window !== 'undefined' ? localStorage.getItem('posts') : null;
      const list = data ? JSON.parse(data) : [];
      const found = list.find((p: any) => String(p.id) === String(id));
      setPost(found || null);
    } catch (e) {
      setPost(null);
    }
  }, [id]);

  if (post === null) {
    return (
      <main className="max-w-md mx-auto p-4 min-h-screen">
        <p className="text-gray-500">해당 글을 찾을 수 없습니다.</p>
        <a href="/posts"><button className="mt-4 px-4 py-2 rounded bg-gray-200">목록으로</button></a>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto p-4 min-h-screen">
      <a href="/posts"><button className="mb-4 btn-secondary">← 목록으로</button></a>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date} | {post.location}</div>
      {post.thumbnail && (
        <img src={post.thumbnail} alt={post.title} className="w-full max-h-64 object-cover rounded border mb-4" />
      )}
      <div className="prose prose-sm max-w-none border p-4 rounded bg-white" dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="mt-6 flex gap-2">
        <button className="btn-primary" onClick={() => { navigator.clipboard.writeText(post.html); alert('HTML이 복사되었습니다.'); }}>HTML 복사</button>
        <a href="/write"><button className="btn-primary">새 글쓰기</button></a>
      </div>
    </main>
  );
}

export default function PostsPage() {
  // 데모용: 실제 데이터 연동 전 임시 리스트
  const demoPosts = [
    {
      id: 1,
      title: '맛집리뷰 예시',
      date: '2025-11-08',
      location: '서울 강남',
      menu: '김치찌개',
      price: '9000원',
      comment: '정말 맛있어요!',
    },
  ];
  return (
    <main className="max-w-md mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">내가 쓴 글 목록</h1>
      <div className="flex flex-col gap-4">
        {demoPosts.map(post => (
          <div key={post.id} className="border rounded p-4 bg-white shadow">
            <div className="font-bold text-lg">{post.title}</div>
            <div className="text-sm text-gray-500">{post.date} | {post.location}</div>
            <div className="mt-2">{post.menu} / {post.price}</div>
            <div className="mt-1 text-orange-600">{post.comment}</div>
          </div>
        ))}
      </div>
      <a href="/write">
        <button className="mt-8 px-6 py-3 rounded-lg bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition">새 글쓰기</button>
      </a>
    </main>
  );
}


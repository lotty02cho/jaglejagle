'use client';
import Link from 'next/link';

export default function TutorialCards() {
  const steps = [
    { title: '1. 목적 선택', desc: '무엇에 대해 쓸지 고르세요. (맛집리뷰 등)', href: '/write' },
    { title: '2. 템플릿 입력', desc: '방문일/위치/메뉴/가격/한줄후기 작성', href: '/write' },
    { title: '3. 이미지·본문·평가', desc: '사진 업로드와 본문 입력 후 미리보기', href: '/write' },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-blue-700 mb-3">빠르게 둘러보기</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <Link key={i} href={s.href} className="group block rounded-xl border border-blue-100 bg-white p-4 shadow-sm hover:shadow transition">
            <div className="text-sm text-blue-600 font-bold mb-1">{s.title}</div>
            <div className="text-xs text-gray-600">{s.desc}</div>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
        <div className="text-sm text-gray-600 mb-2">미리보기 스크린샷(모의)</div>
        <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 grid place-items-center text-blue-700 font-bold">
          자글자글 자동 글쓰기 미리보기
        </div>
      </div>
    </section>
  );
}


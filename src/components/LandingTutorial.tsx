'use client';
import Link from 'next/link';

const steps = [
  { n: 1, title: '로그인', detail: '데모 계정(admin/admin) 또는 소셜 로그인' },
  { n: 2, title: '목적 선택', detail: '리뷰/일기 등 목적 카드를 선택' },
  { n: 3, title: '템플릿 입력', detail: '방문일·위치·메뉴·가격·한줄 후기' },
  { n: 4, title: '이미지 & 본문', detail: '사진 업로드와 자유 본문 작성' },
  { n: 5, title: '평가 기입', detail: '맛·서비스·분위기·재방문 의사' },
  { n: 6, title: 'HTML 복사', detail: '미리보기에서 한 번에 블로그용 HTML 생성' },
];

export default function LandingTutorial() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-8">사용 방법</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(s => (
          <div key={s.n} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">{s.n}</div>
              <h3 className="font-semibold text-blue-700 text-sm">{s.title}</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed flex-1">{s.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/write" className="btn-primary">지금 시작하기</Link>
      </div>
    </section>
  );
}


'use client';
import Link from 'next/link';

const features = [
  {
    title: '목적 기반 템플릿',
    desc: '맛집리뷰 등 목적을 선택하면 필요한 입력란만 표시되어 집중력을 높입니다.',
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6h20v4H6z" /><path d="M6 14h12v4H6z" /><path d="M6 22h8v4H6z" />
        <path d="M24 14v12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '자동 HTML 생성',
    desc: '입력/평가 완료 후 미리보기에서 즉시 HTML 복사. 블로그나 SNS에 붙여넣기.',
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4h8l8 8v12a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z" />
        <path d="M20 4v8h8" strokeLinecap="round" />
        <path d="M11 18l-3 3 3 3" strokeLinecap="round" />
        <path d="M21 18l3 3-3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '로컬 프라이버시',
    desc: '데모 데이터는 브라우저 localStorage에만 저장되어 테스트가 간단합니다.',
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4a8 8 0 0 0-8 8v4H6v8h20v-8h-2v-4a8 8 0 0 0-8-8Z" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: '반응형 UI',
    desc: '모바일부터 데스크탑까지 Tailwind 기반 유연한 레이아웃.',
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <path d="M12 26h8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function LandingFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800">자글자글 특징</h2>
          <p className="mt-3 text-gray-600 max-w-xl">글을 쓰는 과정을 끓는 찌개처럼 흥미롭게. 목적 선택 → 입력 → 미리보기 → HTML 복사까지 한 흐름.</p>
        </div>
        <Link href="/write" className="btn-primary self-start md:self-auto">바로 써보기</Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition flex flex-col">
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-bold text-base text-blue-700 mb-2">{f.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed flex-1">{f.desc}</p>
            <div className="mt-4 text-right">
              <Link href="/about" className="text-xs text-blue-600 font-semibold group-hover:underline">더 알아보기 →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


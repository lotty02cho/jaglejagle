'use client';
import Link from 'next/link';
import CreativeLogo from './CreativeLogo';
import WritingStepsGif from './WritingStepsGif';

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* 배경 레이어 */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-blue-200/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-20 w-[26rem] h-[26rem] rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-28 md:pb-28">
        <div className="flex flex-col gap-10 md:gap-16 lg:flex-row lg:items-center">
          {/* 좌측 히어로 텍스트 */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-blue-800">
              내 세상을 손쉽게 끓인다!<br className="hidden md:block" /> JagleJagle~{' '}
              <span className="align-middle inline-block">
                <CreativeLogo size={28} />
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              경험을 넣으면 글이 완성됩니다. 목적 선택부터 HTML 출력까지{' '}
              <span className="font-semibold text-blue-600">몇 번의 클릭</span>.
              모바일·데스크탑 모두를 위한 반응형 자동 글쓰기 플랫폼 데모입니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link href="/login" className="btn-primary text-center">
                시작하기 (로그인)
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                둘러보기
              </Link>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              데모 모드: admin / admin 로그인 가능 (로컬 저장)
            </div>
          </div>
          {/* 우측 비주얼: 실제 GIF 표시 */}
          <div className="flex-1 flex items-center justify-center">
            <WritingStepsGif />
          </div>
        </div>
      </div>
    </section>
  );
}

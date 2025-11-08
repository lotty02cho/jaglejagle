'use client';
export default function AboutPage() {
  return (
    <main className="max-w-md mx-auto p-6 min-h-[calc(100vh-4rem)]">
      <h1 className="text-2xl font-extrabold text-blue-700 mb-4">앱 소개</h1>
      <p className="text-blue-900 font-medium mb-2">자글자글은 사용자의 경험을 자동으로 정리해 글로 만들어주는 데모 플랫폼입니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        <li>맛집 리뷰부터 일상 기록까지 간편하게 목적 선택</li>
        <li>템플릿 기반 입력으로 빠른 글 완성</li>
        <li>이미지 업로드 & HTML 자동 생성</li>
        <li>로컬 저장을 통한 즉시 목록 확인 (데모)</li>
      </ul>
      <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-800">
        본 서비스는 데모 버전으로 인증/저장은 로컬 환경에서만 작동합니다.
      </div>
    </main>
  );
}


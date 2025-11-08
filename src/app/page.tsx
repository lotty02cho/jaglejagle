import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="p-6 rounded-full bg-blue-100 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-blue-600">
            <path d="M21.731 2.269a2.625 2.625 0 0 1 0 3.712l-1.5 1.5-3.712-3.712 1.5-1.5a2.625 2.625 0 0 1 3.712 0Z" />
            <path d="M2.25 15.75 14.18 3.82l3.712 3.712L5.962 19.462a4.5 4.5 0 0 1-1.897 1.125l-2.658.76a.75.75 0 0 1-.922-.922l.76-2.658a4.5 4.5 0 0 1 1.125-1.897Z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 leading-tight">내 세상을 자유롭게!<br/>자글자글</h1>
        <p className="text-blue-800 font-medium">당신의 경험을 자동으로 글로 만들어 드리는 편안한 공간</p>
        <Link href="/login">
          <button className="mt-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">로그인</button>
        </Link>
      </div>
    </main>
  );
}

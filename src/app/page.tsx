import Link from 'next/link';
import CreativeLogo from '../components/CreativeLogo';

export default function HomePage() {
  return (
    <main className="hero-pattern flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="p-6 rounded-full bg-white/70 backdrop-blur shadow-inner ring-1 ring-blue-100">
          <CreativeLogo size={80} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 leading-tight drop-shadow-sm">내 세상을 자유롭게!<br/>자글자글</h1>
        <p className="text-blue-800 font-medium">당신의 경험을 자동으로 글로 만들어 드리는 편안한 공간</p>
        <Link href="/login">
          <button className="btn-primary">로그인</button>
        </Link>
      </div>
    </main>
  );
}

import MainIntro from '../components/MainIntro';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-orange-100 to-white">
      <MainIntro />
      <Link href="/login">
        <button className="mt-8 px-6 py-3 rounded-lg bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition">로그인</button>
      </Link>
    </main>
  );
}


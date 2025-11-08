'use client';
import SocialLogin from '../../components/SocialLogin';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-2xl font-bold mb-6">자글자글 로그인</h1>
      <SocialLogin />
    </main>
  );
}

import './globals.css';
import ClientHeader from '../components/ClientHeader';

export const metadata = {
  title: '내 세상을 자유롭게! 자글자글',
  description: '자동 글쓰기 데모 앱 — 자글자글',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-900">
        <ClientHeader />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}

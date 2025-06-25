import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Садовый центр в Воронеже',
  description: 'Купите растения и товары для сада в Воронеже. Ландшафтные услуги с примерами работ.',
  keywords: 'садовый центр Воронеж, растения Воронеж, ландшафтные услуги Воронеж',
  openGraph: {
    title: 'Садовый центр в Воронеже',
    description: 'Купите растения и товары для сада в Воронеже. Ландшафтные услуги с примерами работ.',
    url: 'http://localhost:3000',
    siteName: 'Садовый центр Воронеж',
  },
  other: {
    'geo.region': 'RU-VOR',
    'geo.placename': 'Воронеж',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
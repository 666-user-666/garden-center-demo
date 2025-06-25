'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Садовый центр"
            width={150}
            height={50}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">
            Главная
          </Link>
          <Link href="/products" className="hover:underline">
            Каталог
          </Link>
          <Link href="/landscape" className="hover:underline">
            Ландшафтные услуги
          </Link>
          <Link href="/contacts" className="hover:underline">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
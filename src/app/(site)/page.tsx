import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Садовый центр в Воронеже - Главная',
  description: 'Добро пожаловать в садовый центр в Воронеже! У нас вы найдете растения, товары для сада и ландшафтные услуги.',
};

export default function Home() {
  return (
    <>
      <section className="relative h-[500px]">
        <Image
          src="/images/hero.jpg"
          alt="Садовый центр Воронеж"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 fade-in">Садовый центр Воронеж</h1>
            <p className="text-lg md:text-xl mb-6 text-yellow-300 fade-in">Всё для вашего сада и ландшафта</p>
            <Link href="/products" className="btn-primary">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="text-3xl font-bold text-center mb-8 text-black fade-in animation-delay-300">Наши категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Хвойные', slug: 'coniferous' },
            { name: 'Лиственные', slug: 'deciduous' },
            { name: 'Многолетние', slug: 'perennial' },
            { name: 'Однолетние', slug: 'annual' },
            { name: 'Луковичные', slug: 'bulbous' },
            { name: 'Плодово-ягодные', slug: 'fruit-berry' },
            { name: 'Овощи', slug: 'vegetables' },
            { name: 'Всё для сада', slug: 'garden-supplies' },
          ].map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-black fade-in animation-delay-400">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
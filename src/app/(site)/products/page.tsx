import Link from 'next/link';

export const metadata = {
  title: 'Каталог растений и товаров для сада в Воронеже',
  description: 'Ознакомьтесь с нашим каталогом растений и товаров для сада в Воронеже: хвойные, лиственные, многолетние и многое другое.',
};

export default function Products() {
  const categories = [
    { name: 'Хвойные', slug: 'coniferous' },
    { name: 'Лиственные', slug: 'deciduous' },
    { name: 'Многолетние', slug: 'perennial' },
    { name: 'Однолетние', slug: 'annual' },
    { name: 'Луковичные', slug: 'bulbous' },
    { name: 'Плодово-ягодные', slug: 'fruit-berry' },
    { name: 'Овощи', slug: 'vegetables' },
    { name: 'Всё для сада', slug: 'garden-supplies' },
  ];

  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-8 text-center text-black fade-in animation-delay-300">Каталог</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
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
  );
}
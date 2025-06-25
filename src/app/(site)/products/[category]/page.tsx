import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/data';
import { Product } from '@/types';

export const metadata = {
  title: 'Купить [Category] в Воронеже - Садовый центр',
  description: 'Широкий выбор [Category] для вашего сада в Воронеже. Закажите через Telegram!',
};

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const products = await getProductsByCategory(category);
  const categoryName = {
    coniferous: 'Хвойные',
    deciduous: 'Лиственные',
    perennial: 'Многолетние',
    annual: 'Однолетние',
    bulbous: 'Луковичные',
    'fruit-berry': 'Плодово-ягодные',
    vegetables: 'Овощи',
    'garden-supplies': 'Всё для сада',
  }[category] || category;

  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-8 text-black fade-in animation-delay-300">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product: Product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-black fade-in animation-delay-400">Товары в данной категории отсутствуют.</p>
        )}
      </div>
    </section>
  );
}
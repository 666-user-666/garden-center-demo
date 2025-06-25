import { Product } from '@/types';

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products: Product[] = [
    {
      id: 1,
      name: 'Туя западная',
      price: 1500,
      image: '/images/products/tuya.jpg',
      category: 'coniferous',
    },
    {
      id: 2,
      name: 'Клён красный',
      price: 2500,
      image: '/images/products/maple.jpg',
      category: 'deciduous',
    },
    {
      id: 3,
      name: 'Пион травянистый',
      price: 800,
      image: '/images/products/peony.jpg',
      category: 'perennial',
    },
    {
      id: 4,
      name: 'Петуния',
      price: 300,
      image: '/images/products/petunia.jpg',
      category: 'annual',
    },
  ];

  return products.filter((product) => product.category === category);
}
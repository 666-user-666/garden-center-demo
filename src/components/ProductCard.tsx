'use client';

import Image from 'next/image';
import { Product } from '@/types';
import TelegramOrderButton from './TelegramOrderButton';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-semibold text-black dark:text-gray-200 fade-in animation-delay-400">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{product.price} ₽</p>
        <TelegramOrderButton productName={product.name} />
      </div>
    </div>
  );
}
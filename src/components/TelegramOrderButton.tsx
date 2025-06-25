'use client';

interface Props {
  productName: string;
}

export default function TelegramOrderButton({ productName }: Props) {
  return (
    <a
      href={`https://t.me/GardenCenterBot?start=order_${encodeURIComponent(productName)}`}
      className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
      target="_blank"
      rel="noopener noreferrer"
    >
      Заказать в Telegram
    </a>
  );
}
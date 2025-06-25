import TelegramOrderButton from '@/components/TelegramOrderButton';

export const metadata = {
  title: 'Контакты садового центра в Воронеже',
  description: 'Свяжитесь с садовым центром в Воронеже: телефон, email, адрес и Telegram для заказов.',
};

export default function Contacts() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-8 text-center text-black fade-in animation-delay-300">Контакты</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-lg text-black fade-in animation-delay-400">
          <strong>Адрес:</strong> г. Воронеж, ул. Садовая, д. 10
        </p>
        <p className="text-lg text-black fade-in animation-delay-500">
          <strong>Телефон:</strong> +7 (473) 123-45-67
        </p>
        <p className="text-lg text-black fade-in animation-delay-600">
          <strong>Email:</strong> info@garden-center-voronezh.ru
        </p>
        <div>
          <TelegramOrderButton productName="Общий запрос" />
        </div>
      </div>
    </section>
  );
}
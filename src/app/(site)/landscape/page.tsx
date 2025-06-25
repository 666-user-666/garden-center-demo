import LandscapeGallery from '@/components/LandscapeGallery';

export const metadata = {
  title: 'Ландшафтные услуги в Воронеже - Садовый центр',
  description: 'Профессиональные ландшафтные услуги в Воронеже. Ознакомьтесь с примерами наших работ и закажите проект!',
};

export default function Landscape() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-8 text-black fade-in animation-delay-300">Ландшафтные услуги</h1>
      <p className="text-lg mb-6 text-black fade-in animation-delay-400">
        Мы предлагаем полный спектр ландшафтных услуг: от проектирования до реализации. Ознакомьтесь с нашими работами ниже.
      </p>
      <LandscapeGallery />
    </section>
  );
}
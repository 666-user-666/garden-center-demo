'use client';

import Image from 'next/image';

export default function LandscapeGallery() {
  const projects = [
    { id: 1, image: '/images/landscape/project1.jpg', title: 'Сад в классическом стиле' },
    { id: 2, image: '/images/landscape/project2.jpg', title: 'Современный ландшафт' },
    { id: 3, image: '/images/landscape/project3.jpg', title: 'Японский сад' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
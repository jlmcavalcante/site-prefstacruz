import PhotoGallery from '@/components/PhotoGallery';

export default function SantuarioPage() {
  const imageUrls = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Santuário de Santa Cruz dos Milagres</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Horários de Missas e Celebrações</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Segunda a Sábado:</strong> 09:00 e 19:00</li>
          <li><strong>Domingo:</strong> 06:00, 08:00, 10:00 e 19:00</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
        <p className="text-lg leading-relaxed">
          A história do Santuário de Santa Cruz dos Milagres remonta ao século XIX, quando um vaqueiro encontrou uma cruz de madeira em um local isolado. A partir desse evento, a devoção popular cresceu, e o local se tornou um dos maiores centros de peregrinação do Nordeste. A fé e os milagres atribuídos à Santa Cruz atraem milhares de fiéis todos os anos, especialmente durante os festejos de setembro.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Galeria de Fotos</h2>
        <PhotoGallery imageUrls={imageUrls} />
      </section>
    </div>
  );
}

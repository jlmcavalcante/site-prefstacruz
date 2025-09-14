
import Link from 'next/link';

const touristSpots = [
  {
    name: 'Morro da Via Sacra',
    description: 'Um local de peregrinação que representa as 14 estações da Paixão de Cristo.',
    link: '/pontos-turisticos/morro-da-via-sacra',
    image: 'https://via.placeholder.com/800x600.png?text=Morro+da+Via+Sacra'
  },
  {
    name: 'Gruta de Nossa Senhora de Lourdes',
    description: 'Uma réplica da gruta original da França, um local de grande devoção e oração.',
    link: '/pontos-turisticos/gruta-de-nossa-senhora-de-lourdes',
    image: 'https://via.placeholder.com/800x600.png?text=Gruta+de+Nossa+Senhora'
  },
  {
    name: 'Mirante do Cristo Redentor',
    description: 'Oferece uma vista panorâmica da cidade e da estátua do Cristo Redentor.',
    link: '/pontos-turisticos/mirante-do-cristo-redentor',
    image: 'https://via.placeholder.com/800x600.png?text=Mirante+do+Cristo'
  }
];

export default function PontosTuristicos() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Nossos Pontos Turísticos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {touristSpots.map((spot) => (
          <div key={spot.name} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{spot.name}</h2>
              <p className="text-gray-700 mb-4">{spot.description}</p>
              <Link href={spot.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

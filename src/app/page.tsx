import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: 'url(/santuario-hero-bg.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Descubra Santa Cruz dos Milagres
          </h1>
          <p className="text-2xl font-light mb-8">
            O Coração da Fé e da Hospitalidade Piauiense
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/santuario">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 rounded-md shadow-md transition-colors w-full h-20 flex items-center justify-center text-center text-base">
                Horários das Missas
              </button>
            </Link>
            <Link href="/como-chegar">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 rounded-md shadow-md transition-colors w-full h-20 flex items-center justify-center text-center text-base">
                Como Chegar
              </button>
            </Link>
            <Link href="/festejos">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 rounded-md shadow-md transition-colors w-full h-20 flex items-center justify-center text-center text-base">
                Principais Festejos
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">A Terra da Santa Cruz, um Refúgio de Fé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=2" alt="Vista da cidade de Santa Cruz dos Milagres" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Próximo Grande Evento</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-blue-700">Festa da Exaltação da Santa Cruz</h3>
            <p className="text-xl font-semibold mb-4 text-gray-600">Setembro de 2025</p>
            <p className="mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <Link href="/festejos">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors">
                Ver Calendário Completo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

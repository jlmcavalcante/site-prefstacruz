import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/santuario-hero-bg.jpeg')" }}
      >
        {/* Tint Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top left, rgba(13, 135, 10, 0.5), rgba(1, 39, 122, 0.9))',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Descubra Santa Cruz dos Milagres
          </h1>
          <p className="mt-8 text-3xl font-light">
            O Coração da Fé e da Hospitalidade Piauiense
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/santuario">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out w-full text-lg">
                Horários das Missas
              </button>
            </Link>
            <Link href="/como-chegar">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out w-full text-lg">
                Como Chegar
              </button>
            </Link>
            <Link href="/festejos">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out w-full text-lg">
                Principais Festejos
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">A Terra da Santa Cruz, um Refúgio de Fé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <Image src="https://picsum.photos/600/400?random=2" alt="Vista da cidade de Santa Cruz dos Milagres" width={600} height={400} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Próximo Grande Evento</h2>
          <div className="bg-white rounded-xl shadow-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-700">Festa da Exaltação da Santa Cruz</h3>
            <p className="text-2xl font-semibold mb-6 text-gray-600">Setembro de 2025</p>
            <p className="mb-8 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <Link href="/festejos">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out text-lg">
                Ver Calendário Completo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-900">
        <div className="relative isolate">
          <Image
            src="/santuario-hero-bg.jpeg"
            alt="Santuário de Santa Cruz dos Milagres"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 -z-10" />

          <div className="mx-auto max-w-4xl px-6 py-32 text-center sm:py-48 lg:px-8 lg:py-56">
            <h1 className="text-5xl font-extrabold tracking-tight text-white">
              Descubra Santa Cruz dos Milagres
            </h1>
            <p className="mt-8 text-2xl font-light text-white">
              O Coração da Fé e da Hospitalidade Piauiense
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <Image src="https://picsum.photos/600/400?random=2" alt="Vista da cidade de Santa Cruz dos Milagres" width={600} height={400} className="rounded-lg shadow-md" />
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

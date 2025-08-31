import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <section className="text-center px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          Bem-vindo a Santa Cruz dos Milagres
        </h1>
        <p className="text-xl mb-8">
          A Cidade da Fé e da Peregrinação no Piauí
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/santuario">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors w-full">
              Horários das Missas
            </button>
          </Link>
          <Link href="/como-chegar">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors w-full">
              Como Chegar
            </button>
          </Link>
          <Link href="/festejos">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors w-full">
              Principais Festejos
            </button>
          </Link>
        </div>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">A Terra da Santa Cruz, um Refúgio de Fé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400" alt="Vista da cidade de Santa Cruz dos Milagres" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="py-8 px-4 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Próximo Grande Evento</h2>
        <div className="bg-slate-100 rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Festa da Exaltação da Santa Cruz</h3>
          <p className="text-xl font-semibold mb-4">Setembro de 2025</p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <Link href="/festejos">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors">
              Ver Calendário Completo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

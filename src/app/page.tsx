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
    </main>
  );
}

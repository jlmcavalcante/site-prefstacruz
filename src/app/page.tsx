import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <section className="text-center px-4 py-8">
        <h1 className="text-4xl font-bold text-black tracking-tighter mb-4">
          Bem-vindo a Santa Cruz dos Milagres
        </h1>
        <p className="text-xl mb-8 text-black">
          A Cidade da Fé e da Peregrinação no Piauí
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/santuario">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors">
              Horários das Missas
            </button>
          </Link>
          <Link href="/como-chegar">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors">
              Como Chegar
            </button>
          </Link>
          <Link href="/festejos">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors">
              Principais Festejos
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

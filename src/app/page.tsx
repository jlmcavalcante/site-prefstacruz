export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <section className="text-center px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
          Bem-vindo a Santa Cruz dos Milagres
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A Cidade da Fé e da Peregrinação no Piauí
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#005b9f] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Horários das Missas
          </button>
          <button className="bg-[#005b9f] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Como Chegar
          </button>
          <button className="bg-[#005b9f] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Principais Festejos
          </button>
        </div>
      </section>
    </main>
  );
}

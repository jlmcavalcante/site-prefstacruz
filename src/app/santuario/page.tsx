export default function SantuarioPage() {
  return (
    <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Santuário de Santa Cruz dos Milagres</h1>
        </section>

        <section className="mb-12 bg-slate-50 p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-6">Horários de Missas e Celebrações</h2>
          <div className="flex justify-center">
            <ul className="text-lg text-slate-700 space-y-3">
              <li><span className="font-semibold text-slate-900">Segunda a Sexta:</span> 09:00</li>
              <li><span className="font-semibold text-slate-900">Sábados:</span> 09:00 e 19:30</li>
              <li><span className="font-semibold text-slate-900">Domingos:</span> 07:00, 09:00, 11:00 e 19:30</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Nossa História</h2>
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

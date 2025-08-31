export default function FestejosPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Calendário Religioso e Principais Festejos
      </h1>
      <div className="space-y-8">
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Festa da Invenção da Santa Cruz</h3>
          <p className="text-lg text-slate-600 mb-4">Maio</p>
          <p>
            Celebrada em maio, esta festa relembra o encontro da cruz de Cristo por Santa Helena, mãe do imperador Constantino. É um momento de grande devoção e peregrinação em Santa Cruz dos Milagres.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Festa da Exaltação da Santa Cruz</h3>
          <p className="text-lg text-slate-600 mb-4">Setembro</p>
          <p>
            A maior festa do santuário, celebrada em setembro, atrai milhares de fiéis de todo o Brasil. As homenagens à Santa Cruz incluem missas, procissões, novenas e batizados, fortalecendo a fé e a devoção popular.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Encontro dos Santos</h3>
          <p className="text-lg text-slate-600 mb-4">Novembro</p>
          <p>
            Em novembro, o santuário promove o Encontro dos Santos, um evento que reúne diversas comunidades para celebrar a fé e a união. É um momento de partilha, oração e confraternização entre os devotos.
          </p>
        </div>
      </div>
    </div>
  );
}

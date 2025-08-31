export default function ComoChegarPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Como Chegar em Santa Cruz dos Milagres
      </h1>
      <h2 className="text-2xl font-semibold text-center text-slate-700 mb-8">
        Localização do Santuário
      </h2>
      <div className="w-full mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.850402639198!2d-42.60091382594685!3d-5.811417058864756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78564070a2f7c05%3A0x633194a00e57a346!2sSantu%C3%A1rio%20de%20Santa%20Cruz%20dos%20Milagres!5e0!3m2!1spt-BR!2sbr!4v1725162772583!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Principais Rotas</h2>

      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Vindo de Teresina</h3>
          <p className="text-slate-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Vindo de Floriano</h3>
          <p className="text-slate-700 leading-relaxed">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          </p>
        </section>
      </div>
    </div>
  );
}

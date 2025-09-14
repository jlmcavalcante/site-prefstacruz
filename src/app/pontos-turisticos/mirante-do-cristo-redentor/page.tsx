
import PhotoGallery from "@/components/PhotoGallery";

const photos = [
  { src: "https://via.placeholder.com/800x600.png?text=Mirante+do+Cristo+Redentor+1", alt: "Mirante do Cristo Redentor 1" },
  { src: "https://via.placeholder.com/800x600.png?text=Mirante+do+Cristo+Redentor+2", alt: "Mirante do Cristo Redentor 2" },
  { src: "https://via.placeholder.com/800x600.png?text=Mirante+do+Cristo+Redentor+3", alt: "Mirante do Cristo Redentor 3" },
];

export default function MiranteDoCristoRedentor() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mirante do Cristo Redentor</h1>
      <p className="mb-8">
        O Mirante do Cristo Redentor oferece uma vista panorâmica da cidade de Santa Cruz dos Milagres. A estátua do Cristo Redentor, de braços abertos, abençoa a cidade e seus visitantes. É um ótimo local para apreciar o pôr do sol e tirar fotos memoráveis da paisagem local.
      </p>
      <div className="mb-8">
        <PhotoGallery photos={photos} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Localização</h2>
        <div className="aspect-w-16 aspect-h-9">
        <iframe src="https.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.887759553538!2d-42.14815868884964!3d-5.805553595709505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e4a7a8f3a5a5d%3A0x8f1b1af2a3c3a5c8!2sMirante%20do%20Cristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1715878239608!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

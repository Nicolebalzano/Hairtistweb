import { Scissors, Sparkles, Palette, Shield } from "lucide-react";
const OurServices = () => {
  const cards = [
    {
      icona: Scissors,
      titolo: "Taglio Premium",
      paragrafo:
        "Studiato per esaltare la tua struttura. Ogni taglio è un'opera d'arte personalizzata.",
      prezzo: "Da €45",
      bg: "/taglio.png.jpg",
    },
    {
      icona: Palette,
      titolo: "Colore Avanzato",
      paragrafo:
        "Balayage, highlights e colorazioni custom. Tecnica e creatività in perfetto equilibrio.",
      prezzo: "Da €80",
      bg: "/colore.jpg",
    },
    {
      icona: Sparkles,
      titolo: "Styling & Piega",
      paragrafo:
        "Finishing impeccabile per eventi speciali o il tuo look quotidiano di impatto.",
      prezzo: "Da €35",
      bg: "/styling.jpg",
    },
    {
      icona: Shield,
      titolo: "Trattamenti",
      paragrafo:
        "Protocolli rigeneranti avanzati per capelli forti, lucidi e straordinariamente sani.",
      prezzo: "Da €55",
      bg: "/trattamenti.jpg",
    },
  ];
  return (
    <>
      <div className="i-nostri-servizi">
        <div className="  fade-in-up i-nostri-servizi-1">
          <div className="  fade-in-up unique">
            <p>
              <span className="  fade-in-up line">─────</span> I nostri servizi{" "}
              <span className="  fade-in-up line">─────</span>
            </p>
          </div>
          <div className="  fade-in-up hero-title">
            <h2>
              <div></div> Ogni dettaglio{" "}
              <span className="  fade-in-up capelli">pensato per te</span>.
            </h2>{" "}
          </div>
        </div>
        <div className="  fade-in-up i-nostri-servizi-2">
          {cards.map((card, index) => (
            <div
              className="  fade-in-up service-card"
              key={index}
              style={{
                backgroundImage: `url(${card.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="  fade-in-up icon">
                <card.icona size={32} strokeWidth={1.5} />
              </div>
              <div className="  fade-in-up h3-p">
                {" "}
                <h3>{card.titolo}</h3>
                <p className="  fade-in-up servizi-p">{card.paragrafo}</p>
              </div>

              <span className="  fade-in-up price unique">{card.prezzo}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default OurServices;

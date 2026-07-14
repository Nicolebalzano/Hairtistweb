import { Scissors, Sparkles, Palette, Shield } from "lucide-react";
const OurServices = () => {
  const cards = [
    {
      icona: Scissors,
      titolo: "Taglio Premium",
      paragrafo:
        "Studiato per esaltare la tua struttura ossea. Ogni taglio è un'opera d'arte personalizzata.",
      prezzo: "Da €45",
    },
    {
      icona: Palette,
      titolo: "Colore Avanzato",
      paragrafo:
        "Balayage, highlights e colorazioni custom. Tecnica e creatività in perfetto equilibrio.",
      prezzo: "Da €80",
    },
    {
      icona: Sparkles,
      titolo: "Styling & Piega",
      paragrafo:
        "Finishing impeccabile per eventi speciali o il tuo look quotidiano di impatto.",
      prezzo: "Da €35",
    },
    {
      icona: Shield,
      titolo: "Trattamenti",
      paragrafo:
        "Protocolli rigeneranti avanzati per capelli forti, lucidi e straordinariamente sani.",
      prezzo: "Da €55",
    },
  ];
  return (
    <>
      <div className="i-nostri-servizi">
        <div className="i-nostri-servizi-1">
          <div className="unique">
            <p>
              <span className="line">─────</span> I nostri servizi{" "}
              <span className="line">─────</span>
            </p>
          </div>
          <div className="hero-title">
            <h2>
           <div></div>   Ogni dettaglio <span className="capelli">pensato per te</span>.
            </h2>{" "}
          </div>
        </div>
        <div className="i-nostri-servizi-2">
          {cards.map((card, index) => (
            <div className="service-card" key={index}>
              <div className="icon">
                <card.icona size={32} strokeWidth={1.5} />
              </div>
              <h3>{card.titolo}</h3>
              <p className="servizi-p">{card.paragrafo}</p>
              <span className="price unique">{card.prezzo}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default OurServices;

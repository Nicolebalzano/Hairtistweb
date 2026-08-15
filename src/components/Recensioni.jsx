import { Star } from "lucide-react";
const Recensioni = () => {
  const recensioniData = [
    {
      stars: 5,
      text: "Mi sono trovata benissimo, ambiente familiare, accogliente, professionalità, ottimo rapporto qualità prezzo",
      name: "Lucia",
      date: "Luglio 2026",
    },
    {
      stars: 5,
      text: "Personale cordiale e preparato, locale accogliente, servizio molto rapido. Costi molto buoni.",
      name: "Francesco",
      date: "Aprile 2024",
    },
    {
      stars: 5,
      text: "Esperienza molto positiva!Francesco è stato super disponibile con orario e giorni,gentile e simpatico. Nonostante la mia richiesta fosse una sfida (sfumature rosa), ha fatto un ottimo lavoro. Sto ricevendo molti complimenti!grazie e alla prossima",
      name: "Hilary",
      date: "Giugno 2026",
    },
  ];

  return (
    <div className="recensioni">
      <div className="  fade-in-up recensioni-1">
        <div className="  fade-in-up unique">
          <p>
            <span className="  fade-in-up line">─────</span> RECENSIONI{" "}
            <span className="  fade-in-up line">─────</span>
          </p>
        </div>
        <div className="  fade-in-up hero-title">
          <h2>
            Lo dicono i <span className="  fade-in-up capelli">clienti.</span>
          </h2>
        </div>
      </div>

      <div className="  fade-in-up recensioni-2">
        {recensioniData.map((recensione, index) => (
          <div className="  fade-in-up card" key={index}>
            <div className="  fade-in-up stars">
              {[...Array(recensione.stars)].map((_, i) => (
                <Star key={i} size={16} color="#d4af37" fill="#d4af37" />
              ))}
            </div>
            <p className="  fade-in-up text">“{recensione.text}”</p>
            <hr />
            <div className="  fade-in-up footer">
              <strong>{recensione.name}</strong>
              <span>{recensione.date}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="https://www.treatwell.it/salone/hairtist-parrucchiere-unisex/" className="treatwell-link">Leggi di più su treatwell</a>
    </div>
  );
};
export default Recensioni;

import { Star } from "lucide-react";
const Recensioni = () => {
  const recensioniData = [
    {
      stars: 5,
      text: "Un'esperienza straordinaria. Finalmente un salone che capisce davvero cosa voglio. Il taglio è perfetto, tornerò sempre.",
      name: "Valentina M.",
      date: "Maggio 2025",
    },
    {
      stars: 5,
      text: "Il balayage più bello che abbia mai avuto. Professionalità e cura al massimo livello. Lo consiglio a tutte.",
      name: "Sofia R.",
      date: "Aprile 2025",
    },
    {
      stars: 5,
      text: "Ambiente elegante, staff eccezionale. Mi sento trasformata ogni volta che esco da HAIRTIST. Un lusso accessibile.",
      name: "Laura B.",
      date: "Maggio 2025",
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
    </div>
  );
};
export default Recensioni;

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
      <div className="recensioni-1">
        <div className="unique">
          <p>
            <span className="line">─────</span> RECENSIONI{" "}
            <span className="line">─────</span>
          </p>
        </div>
        <div className="hero-title">
          <h2>
            Lo dicono i <span className="capelli">clienti.</span>
          </h2>
        </div>
      </div>

      <div className="recensioni-2">
        {recensioniData.map((recensione, index) => (
          <div className="card" key={index}>
            <div className="stars">
              {[...Array(recensione.stars)].map((_, i) => (
                <Star key={i} size={16} color="#d4af37" fill="#d4af37" />
              ))}
            </div>
            <p className="text">“{recensione.text}”</p>
            <hr />
            <div className="footer">
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

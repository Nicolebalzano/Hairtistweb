import { Scissors, Sparkles, Palette, Shield } from "lucide-react";
const Esperienza = () => {
  return (
    <>
      <div className="esperienza">
        {/* ESPERIENZA 1 */}
        <div className="  fade-in-up esperienza-1">
          <div className="  fade-in-up unique">
            <p>
              <span className="  fade-in-up line">─────</span> CIO CHE CI RENDE UNICI{" "}
            </p>
          </div>

          <div className="  fade-in-up hero-title">
            <h2>
              Un'esperienza senza <br />
              <span className="  fade-in-up capelli">compromessi</span>.
            </h2>{" "}
          </div>
          <div className="  fade-in-up esperienza-logo-text">
            <div>
              <div className="  fade-in-up icon">
                <Scissors />
              </div>
              <div className="  fade-in-up text">
                <h5>Tecnologie Innovative</h5>
                <p>
                  Strumenti e tecniche di ultima generazione per risultati
                  straordinari e duraturi.
                </p>
              </div>
            </div>
            <div>
              <div className="  fade-in-up icon">
                {" "}
                <Sparkles />
              </div>
              <div className="  fade-in-up text">
                <h5>Prodotti Premium</h5>
                <p>
                  Collaboriamo con i brand più esclusivi: Oribe, Kérastase,
                  Davines, Wella Professional.
                </p>
              </div>
            </div>
            <div>
              <div className="  fade-in-up icon">
                {" "}
                <Shield />
              </div>
              <div className="  fade-in-up text">
                <h5>Consulenza Personalizzata</h5>
                <p>
                  Ogni cliente riceve un'analisi approfondita. Il tuo look è
                  unico come te.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ESPERIENZA 2 */}
        <div className="  fade-in-up esperienza-2">
          <div>
            <img
              src="/hair-long.jpg"
              alt=""
              className="  fade-in-up img-1-esperienza"
            />
          </div>
          <div>
            <div className="  fade-in-up img-2-flex">
              <img src="/hair-long.jpg" alt="" />
              <img src="/hair-long.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Esperienza;

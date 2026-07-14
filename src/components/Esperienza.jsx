import { Scissors, Sparkles, Palette, Shield } from "lucide-react";
const Esperienza = () => {
  return (
    <>
      <div className="esperienza">
        {/* ESPERIENZA 1 */}
        <div className="esperienza-1">
          <div className="unique">
            <p>
              <span className="line">─────</span> CIO CHE CI RENDE UNICI{" "}
            </p>
          </div>

          <div className="hero-title">
            <h2>
              Un'esperienza senza <br />
              <span className="capelli">compromessi</span>.
            </h2>{" "}
          </div>
          <div className="esperienza-logo-text">
            <div>
              <div className="icon">
                <Scissors />
              </div>
              <div className="text">
                <h5>Tecnologie Innovative</h5>
                <p>
                  Strumenti e tecniche di ultima generazione per risultati
                  straordinari e duraturi.
                </p>
              </div>
            </div>
            <div>
              <div className="icon">
                {" "}
                <Sparkles />
              </div>
              <div className="text">
                <h5>Prodotti Premium</h5>
                <p>
                  Collaboriamo con i brand più esclusivi: Oribe, Kérastase,
                  Davines, Wella Professional.
                </p>
              </div>
            </div>
            <div>
              <div className="icon">
                {" "}
                <Shield />
              </div>
              <div className="text">
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
        <div className="esperienza-2">
          <div>
            <img
              src="/chi-siamo-piega.png"
              alt=""
              className="img-1-esperienza"
            />
          </div>
          <div>
            <div className="img-2-flex">
              <img src="/hero-bg.png" alt="" />
              <img src="/hero-bg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Esperienza;

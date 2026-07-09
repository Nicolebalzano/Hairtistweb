const ChiSiamo = () => {
  return (
    <>
      <div className="chi-siamo">
        {/* CHI SIAMO 1 */}
        <div className="chi-siamo-1">
          <img
            src="/chi-siamo-piega.png"
            alt="donna che fa una messa in piega"
            className="chi-siamo-img"
          />
          <div className="square-el">
            <span className="stripe-num">10+</span>
            <span className="stripe-text">ANNI DI ECCELLENZA</span>
          </div>
        </div>

        {/* CHI SIAMO 2 */}
        <div className="chi-siamo-2">
          {/* UNIQUE */}
          <div className="unique">
            <p>
              <span className="line">─────</span> Chi siamo{" "}
            </p>
          </div>

          {/* TITOLO */}
          <div className="hero-title chi-siamo-title">
            <h2>
              Il tuo <span className="capelli">salone.</span>
              <br />
              Il tuo comfort.
            </h2>{" "}
          </div>
          {/* PARAGRAFO */}
          <p className="chi-siamo-p">
            HAIRTIST nasce dalla convinzione che ogni capigliatura racconta una
            storia. <br />
            Il nostro team di stylisti certificati lavora con tecniche
            d'avanguardia e materiali selezionati per trasformare la tua visione
            in realtà <br /> con precisione millimetrica e passione autentica.
          </p>
          <ul>
            <li>
              <span>Consulenza personalizzata pre-servizio</span>
            </li>
            <li>
              <span>Tecnici certificati con formazione internazionale</span>
            </li>
            <li>
              <span>Prodotti premium selezionati per ogni tipo di capello</span>
            </li>
            <li>
              <span>Esperienza sensoriale completa e immersiva</span>
            </li>
          </ul>
          <div className="unique p-3">
            <span>
              SCOPRI DI PIU{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiSiamo;

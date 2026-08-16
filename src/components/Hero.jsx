import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Raleway:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="hero">
        <div className="front">
          <div className="unique  fade-in-up">
            <p>
              <span className="line">──</span> UNIQUE HAIR SALON{" "}
              <span className="line">──</span> FIRENZE{" "}
              <span className="line">──</span>
            </p>
          </div>
          <div className="hero-title  fade-in-up">
            <h2>
              Non facciamo solo i{" "}
              <span className="capelli fade-in-up">capelli</span>
              <br />
              Creaiamo esperienze <span className="capelli">uniche</span>.
            </h2>{" "}
          </div>
          <div>
            <p className="subtitle  fade-in-up">
              L'hair styling di ultima <br />
              generazione
            </p>
          </div>
          <div className="hero-btns  fade-in-up">
            <Link to="vieni-a-trovarci" className="hero-btn-1" smooth={true} duration={500}>
              Prenota
            </Link>
        <Link to="i-nostri-servizi" className="hero-btn-2" smooth={true} duration={500}>
              SCOPRI I SERVIZI
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;

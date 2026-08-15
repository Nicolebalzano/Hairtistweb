import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className={scrolled ? "scrolled" : "top"}>
        <div className="flex-header">
          <div>
            <h1 className="logo">
              <span className="part1">HAIR</span>
              <span className="part2">TIST</span>
            </h1>
          </div>
          <div className="flex-link desktop">
            <Link to="chi-siamo" smooth={true} duration={500}>
              Chi siamo
            </Link>
            <Link to="i-nostri-servizi" smooth={true} duration={500}>
              Servizi
            </Link>
            <Link to="nostri-lavori" smooth={true} duration={500}>
              Galleria
            </Link>
            <Link to="vieni-a-trovarci" smooth={true} duration={500}>
              Contatti
            </Link>
          </div>

          <div className="prenota-btn">
            {" "}
            <Link to="vieni-a-trovarci" smooth={true} duration={500}>
              Prenota
            </Link>
          </div>
        </div>
        {/* HAMBURGER MOBILE */}
        <div className="hamburger-logo">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "" : "☰"}
          </div>
          <div className="logo-hambuger">
            <div>
              <h1 className="logo-sm">
                <span className="part1">HAIR</span>
                <span className="part2">TIST</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* menu mobile */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* HAMBURGER MOBILE */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <div className="hamburger-links hamburger-as">
          <Link to="chi-siamo" onClick={() => setMenuOpen(false)}>
            Chi siamo
          </Link>
          <Link to="i-nostri-servizi" onClick={() => setMenuOpen(false)}>
            Servizi
          </Link>
          <Link to="nostri-lavori" onClick={() => setMenuOpen(false)}>
            Galleria
          </Link>
          <Link to="vieni-a-trovarci" onClick={() => setMenuOpen(false)}>
            Contatti
          </Link>
        </div>

        <div className="prenota-btn-sm ">
        
          <Link to="vieni-a-trovarci" smooth={true} duration={500}>
            Prenota
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;

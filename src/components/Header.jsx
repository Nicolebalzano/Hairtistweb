import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);
    
 return (
<>
   <header className={scrolled ? "scrolled" : "top"}>
<div className="flex-header">
    <div><h1 className="logo">
<span className="part1">HAIR</span>
  <span className="part2">TIST</span>
</h1></div>
    <div className="flex-link desktop">
        <Link to="/">Chi siamo</Link>
          <Link to="/">Servizi</Link>
            <Link to="/">Galleria</Link>
              <Link to="/">Contatti</Link>
        </div>

    <div className="prenota-btn">  <Link to="/">Prenota</Link></div>
</div>
    {/* HAMBURGER MOBILE */}
    <div className="hamburger-logo">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? "" : "☰"}
    </div>
     <div className="logo-hambuger">
                <div><h1 className="logo-sm">
<span className="part1">HAIR</span>
  <span className="part2">TIST</span>
</h1></div></div>
    </div>

</header>

{/* menu mobile */}
<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* HAMBURGER MOBILE */}
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? "✕" : "☰"}
    </div>
    <div className="hamburger-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Chi siamo</Link>
  <Link to="/" onClick={() => setMenuOpen(false)}>Servizi</Link>
  <Link to="/" onClick={() => setMenuOpen(false)}>Galleria</Link>
  <Link to="/" onClick={() => setMenuOpen(false)}>Contatti</Link>
    </div>


 <div className="prenota-btn-sm ">  <Link to="/">Prenota</Link></div>
</div>

</>
 );
}
export default Header;
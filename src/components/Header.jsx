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
        <a href="/">Chi siamo</a>
          <a href="/">Servizi</a>
            <a href="/">Galleria</a>
              <a href="/">Contatti</a>
        </div>

    <div className="prenota-btn">  <a href="/">Prenota</a></div>
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
    <div className="hamburger-as">
          <a href="/" onClick={() => setMenuOpen(false)}>Chi siamo</a>
  <a href="/" onClick={() => setMenuOpen(false)}>Servizi</a>
  <a href="/" onClick={() => setMenuOpen(false)}>Galleria</a>
  <a href="/" onClick={() => setMenuOpen(false)}>Contatti</a>
    </div>


 <div className="prenota-btn-sm ">  <a href="/">Prenota</a></div>
</div>

</>
 );
}
export default Header;
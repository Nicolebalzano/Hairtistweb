import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
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

    
 return (
<>
   <header className={scrolled ? "scrolled" : "top"}>
<div className="flex-header">
    <div><h1 className="logo">
<span className="part1">HAIR</span>
  <span className="part2">TIST</span>
</h1></div>
    <div className="flex-link">
        <Link to="/">Chi siamo</Link>
          <Link to="/">Servizi</Link>
            <Link to="/">Galleria</Link>
              <Link to="/">Contatti</Link>
        </div>

    <div className="prenota-btn">  <Link to="/">Prenota</Link></div>
</div></header>
</>
 );
}
export default Header;
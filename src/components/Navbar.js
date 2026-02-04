import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../imagens/logoMarca.png";
import { FaBars } from "react-icons/fa";

function Navbar() 
{
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
    <div>
      <img src={logo} alt="Bolt Solar" className="logo-img" /> 
      <h1 className="logo">Bolt Solar</h1>
    </div>
    <div className="nav-right">

    {/* BOTÃO 3 PONTINHOS (APENAS MOBILE VIA CSS) */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />

        </div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
            <li><a href="#beneficios" onClick={() => setMenuOpen(false)}>Vantagens</a></li>
            <li><a href="#instalacao-garantia" onClick={() => setMenuOpen(false)}>Serviços</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        <a
          href="https://wa.me/5598991101999"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
           Solicite um Orçamento
        </a>
    </div>
    </nav>
  );
}

export default Navbar;

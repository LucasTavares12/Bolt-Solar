import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../imagens/logoMarca.png";

function Navbar() 
{
  const [scrolled, setScrolled] = useState(false);

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
      <div className="menu-toggle" id="menuToggle">
        ⋮
      </div>

      <ul className="nav-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#beneficios">Vantagens</a></li>
        <li><a href="#instalacao-garantia">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
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

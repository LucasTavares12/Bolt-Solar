import "./Contato.css";
import logo from "../imagens/logoMarca.png";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Contato() {
  return (
    <footer id="contato" className="contato">
      <div className="contato-container">

        {/* LADO ESQUERDO */}
        <div className="contato-left">
          <img src={logo} alt="Bolt Solare" className="contato-logo" />
          <p>
            A Bolt Solar atua com soluções completas em energia solar
            fotovoltaica, oferecendo projetos eficientes, instalação
            profissional e suporte técnico especializado.
          </p>
        </div>

        {/* LADO DIREITO */}
        <div className="contato-right">
         

          <div className="contato-icons">
            <a
              href="https://wa.me/5598991101999?text=Olá! Desejo solicitar um orçamento de energia solar."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/boltsolarenergy/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SUA+LOCALIZACAO"
              target="_blank"
              rel="noreferrer"
              aria-label="Localização"
            >
              <FaMapMarkerAlt />
            
            </a>
          </div>
            <p><strong>Telefone:</strong> (98) 99110-1999</p>
          <p className="cnpj">
            <strong>CNPJ:</strong> 41.742.660/0001-25
          </p>
        </div>

      </div>

      {/* CRÉDITOS */}
      <div className="contato-creditos">
        <p>
          © {new Date().getFullYear()} Bolt Solar • Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/_lucas_tavvares_/"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Tavares
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Contato;


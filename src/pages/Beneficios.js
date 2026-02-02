import "./Beneficios.css";
import { FaWhatsapp } from "react-icons/fa";
import casaSolar from "../imagens/CasaBolt.png";
import {
  FaBolt,
  FaMoneyBillWave,
  FaHome,
  FaTools,
  FaClock,
  FaLeaf
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function Beneficios() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="beneficios">
      <div
        ref={sectionRef}
        className={`beneficios-container ${visible ? "show" : ""}`}
      >
        {/* IMAGEM */}
        <div className="beneficios-image">
          <img src={casaSolar} alt="Casa com energia solar" />
        </div>

        {/* CONTEÚDO */}
        <div className="beneficios-content">
          <h2>Por que escolher a Bolt Solar?</h2>
          <p className="beneficios-subtitle">
            Mais do que instalar placas solares, entregamos segurança,
            economia e tranquilidade para você investir com confiança.
          </p>

          <ul className="beneficios-list">
            <li>
              <div className="beneficio-icon"><FaBolt /></div>
              <div className="beneficio-text">
                <strong>Projetos personalizados</strong>
                <span>
                  Cada sistema é dimensionado de acordo com o seu consumo,
                  garantindo máxima eficiência energética.
                </span>
              </div>
            </li>

            <li>
              <div className="beneficio-icon"><FaMoneyBillWave /></div>
              <div className="beneficio-text">
                <strong>Economia real na conta de luz</strong>
                <span>
                  Reduza em até <strong>95%</strong> o valor da sua fatura mensal.
                </span>
              </div>
            </li>

            <li>
              <div className="beneficio-icon"><FaHome /></div>
              <div className="beneficio-text">
                <strong>Valorização do imóvel</strong>
                <span>Imóveis com energia solar valorizam até 20%.</span>
              </div>
            </li>

            <li>
              <div className="beneficio-icon"><FaTools /></div>
              <div className="beneficio-text">
                <strong>Instalação profissional</strong>
                <span>Equipe técnica certificada e segura.</span>
              </div>
            </li>

            <li>
              <div className="beneficio-icon"><FaClock /></div>
              <div className="beneficio-text">
                <strong>Longa vida útil</strong>
                <span>Sistemas com mais de 20 anos de durabilidade.</span>
              </div>
            </li>

            <li>
              <div className="beneficio-icon"><FaLeaf /></div>
              <div className="beneficio-text">
                <strong>Sustentabilidade</strong>
                <span>Energia limpa e renovável.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="beneficios-cta">
        <a
          href="https://wa.me/5598991101999"
          target="_blank"
          rel="noreferrer"
          className="cta-beneficios"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Escolha Certo e Solicite seu Orçamento Agora
        </a>
      </div>
    </section>
  );
}

export default Beneficios;

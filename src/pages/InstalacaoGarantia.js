import "./InstalacaoGarantia.css";
import { FaWhatsapp } from "react-icons/fa";
import imagemInstalacao from "../imagens/imagemInicio.webp";
import {
  FaTools,
  FaShieldAlt,
  FaSolarPanel,
  FaSyncAlt,
  FaCogs
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function InstalacaoGarantia() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="instalacao-garantia" className="instalacao-garantia">
      <div
        ref={sectionRef}
        className={`ig-container ${visible ? "show" : ""}`}
      >
        {/* CONTEÚDO */}
        <div className="ig-content">
          <h2>Instalação e Garantia</h2>
          <p className="ig-subtitle">
            Cuidamos de todo o processo para você ter tranquilidade do início
            ao fim.
          </p>

          <div className="ig-block">
            <h3 className="ig-title">
              <FaTools className="ig-icon" />
              Instalação Completa
            </h3>

            <p>
              A Bolt Solar entrega uma solução completa em energia solar
              fotovoltaica. Nosso serviço inclui o fornecimento dos
              equipamentos, instalação profissional e todo o processo de
              homologação junto à concessionária de energia.
            </p>

            <p>
              Todo o sistema é instalado por uma equipe técnica especializada,
              seguindo rigorosamente as normas técnicas e de segurança,
              garantindo eficiência, durabilidade e máximo desempenho do sistema.
            </p>
          </div>

          <div className="ig-block">
            <h3 className="ig-title">
              <FaShieldAlt className="ig-icon" />
              Garantias
            </h3>

            <ul className="ig-list">
              <li>
                <FaSolarPanel className="ig-list-icon" />
                <span>
                  <strong>Módulos fotovoltaicos:</strong> garantia de até
                  <strong> 30 anos</strong> de desempenho.
                </span>
              </li>

              <li>
                <FaSyncAlt className="ig-list-icon" />
                <span>
                  <strong>Inversor solar:</strong> garantia média de
                  <strong> 10 anos</strong>, podendo ser estendida conforme o fabricante.
                </span>
              </li>

              <li>
                <FaCogs className="ig-list-icon" />
                <span>
                  <strong>Estrutura de fixação:</strong> garantia de
                  <strong> 12 anos</strong> contra corrosão e falhas estruturais.
                </span>
              </li>
            </ul>

            <p>
              Trabalhamos apenas com fornecedores certificados e reconhecidos no
              mercado, garantindo segurança e confiabilidade para o seu investimento.
            </p>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="ig-image">
          <img src={imagemInstalacao} alt="Instalação de energia solar" />
        </div>
      </div>

      {/* CTA */}
      <div className="ig-cta">
        <a
          href="https://wa.me/5598991101999"
          target="_blank"
          rel="noreferrer"
          className="cta-ig"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Solicite seu Orçamento Agora
        </a>
      </div>
    </section>
  );
}

export default InstalacaoGarantia;


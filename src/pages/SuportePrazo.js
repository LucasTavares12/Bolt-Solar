import "./SuportePrazo.css";
import { FaWhatsapp } from "react-icons/fa";
import suporteImg from "../imagens/imagemSuporte.webp";
import { FaTools, FaClock } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function SuportePrazo() {
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
    <section id="suporte-prazo" className="suporte-prazo">
      <div
        ref={sectionRef}
        className={`sp-container ${visible ? "show" : ""}`}
      >
        {/* IMAGEM */}
        <div className="sp-image">
          <img src={suporteImg} alt="Suporte técnico energia solar" />
        </div>

        {/* CONTEÚDO */}
        <div className="sp-content">
          <h2>Suporte Técnico e Prazo de Instalação</h2>
          <p className="sp-subtitle">
            Atendimento especializado e compromisso com prazos claros,
            garantindo tranquilidade do início ao pós-instalação.
          </p>

          <div className="sp-card">
            <h3 className="sp-title">
              <FaTools className="sp-icon" />
              Suporte Técnico Especializado
            </h3>

            <p>
              Após a instalação, você conta com suporte técnico completo da
              Bolt Solar. Durante os primeiros <strong>12 meses</strong>,
              realizamos visitas técnicas, limpeza preventiva dos módulos e
              treinamento para o correto uso do sistema.
            </p>

            <p>
              Nosso time está disponível para esclarecer dúvidas, acompanhar
              o desempenho do sistema e garantir que sua geração de energia
              esteja sempre no máximo rendimento.
            </p>
          </div>

          <div className="sp-card">
            <h3 className="sp-title">
              <FaClock className="sp-icon" />
              Prazo de Instalação
            </h3>

            <p>
              Trabalhamos com um prazo médio de instalação de até
              <strong> 60 dias</strong>, considerando todas as etapas do
              processo: análise técnica, aprovação do projeto,
              homologação junto à concessionária e instalação do sistema.
            </p>

            <p>
              Todo o cronograma é acompanhado de perto, com comunicação
              clara e atualizações constantes para que você saiba exatamente
              em que fase o seu projeto se encontra.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sp-cta">
        <a
          href="https://wa.me/5598991101999?text=Olá! Desejo solicitar um orçamento de energia solar."
          target="_blank"
          rel="noreferrer"
          className="cta-sp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Solicite seu Orçamento Agora
        </a>
      </div>
    </section>
  );
}

export default SuportePrazo;

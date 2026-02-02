import "./Pagamento.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaMoneyBillWave, FaCreditCard, FaUniversity } from "react-icons/fa";

function Pagamento() {
  return (
    <section id="pagamento" className="pagamento">
      <div className="pg-container">

        <h2>Formas de Pagamento</h2>
        <p className="pg-subtitle">
          Facilitamos o acesso à energia solar com condições flexíveis e pensadas
          para o seu orçamento.
        </p>

        <div className="pg-cards">

          <div className="pg-card">
            <h3 className="pg-title">
              <FaMoneyBillWave className="pg-icon" />
              Pagamento à Vista
            </h3>
            <p>
              Opção ideal para quem busca economia imediata. Condições
              diferenciadas, com possibilidade de negociação e vantagens
              exclusivas para pagamento à vista.
            </p>
          </div>

          <div className="pg-card">
            <h3 className="pg-title">
              <FaCreditCard className="pg-icon" />
              Cartão de Crédito
            </h3>
            <p>
              Parcelamento facilitado no cartão de crédito, permitindo investir
              em energia solar sem comprometer o fluxo financeiro mensal.
            </p>
          </div>

          <div className="pg-card">
            <h3 className="pg-title">
              <FaUniversity className="pg-icon" />
              Financiamento em até 120x
            </h3>
            <p>
              Trabalhamos com instituições financeiras parceiras que oferecem
              financiamento em até <strong>120 parcelas</strong>, com valores que
              podem substituir ou se aproximar do custo atual da sua conta de
              energia.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="pg-cta">
        <a
          href="https://wa.me/5598991101999"
          target="_blank"
          rel="noreferrer"
          className="cta-pg"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Solicite seu Orçamento Agora
        </a>
      </div>
    </section>
  );
}

export default Pagamento;

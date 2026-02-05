import "./Home.css";
import ImgFundo from "../imagens/imagemFundo.png";

function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{ backgroundImage: `url(${ImgFundo})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h2>Sua conta de energia está alta?</h2>

        <p>
           <strong>A Bolt Solar é especializada em soluções completas em
          energia solar fotovoltaica, oferecendo projetos eficientes, instalação
          profissional e suporte técnico. Reduza em até <strong>95%</strong> sua
          conta de energia com uma fonte limpa, sustentável e segura.</strong>
        </p>

              <div className="home-cta">
          <a
            href="https://wa.me/5598991101999?text=Olá! Desejo solicitar um orçamento de energia solar."
            target="_blank"
            rel="noreferrer"
            className="cta-home"
          >
            Comece a Economizar
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;





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
        <h2>Sua conta de energia <br/> está alta?</h2>

        <p>
           <strong>A Bolt Solar atua desde <strong>2021</strong> oferecendo soluções completas em
energia solar fotovoltaica, com projetos eficientes, instalação profissional
e suporte técnico especializado. Reduza em até <strong>95%</strong> sua conta
de energia com uma fonte limpa, sustentável, segura e comprovada ao longo dos
anos.
</strong>
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





import "./home.css";
import Wifi from "../../assets/svgs/wifi-icon.svg";
import Pub from "../../assets/svgs/drink.svg";
import Game from "../../assets/svgs/game.svg";
import Billiar from "../../assets/svgs/billiar.svg";
import Unitys from "./unitys/unitys";
import MiniGaleria from "./mini-galeria/mini-galeria";

function Home() {
  return (
    <div>
      <div className="background">
        <div className="content-home">
          <div className="content-logo center">
            <div className="logo center">
              <p>barber</p>
              <p>BLASTER</p>
            </div>
          </div>

          <div className="content-video center">
            <div className="center text-agmt">
              <p>
                Colecione memórias e acumule sorrisos. Todo o resto é
                passageiro.
              </p>
              <p>
                O homem moderno também cuida da sua aparência e a barbearia
                BLASTER é o melhor lugar para fazer isso! Temos uma equipe com
                os melhores profissionais da cidade e condições especiais para
                você sair daqui de cabelo na régua!
              </p>
              <p> Estamos te esperando!</p>
              <div className="btn">
                <button>Agendar</button>
              </div>
            </div>
            <div className="video">
              {/* <iframe
                width={"100%"}
                height={315}
                src="https://www.youtube.com/embed/W18jsNa8KmA?si=CNimS1C_bh5QzOL7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>

      {/* opções da barbearia */}
      <div className="content-game">
        <div>
          <img src={Wifi} alt="wifi" />
          <p>WIFI GRATIS</p>
        </div>
        <div>
          <img src={Pub} alt=" beer" />
          <p>PUB</p>
        </div>
        <div>
          <img src={Game} alt="Game" />
          <p>JOGOS</p>
        </div>
        <div>
          <img src={Billiar} alt="billiar" />
          <p>SINUCA</p>
        </div>
      </div>

      {/* Unidade */}
      <Unitys />

      {/* Mini Galeria */}
      <MiniGaleria />
    </div>
  );
}

export default Home;

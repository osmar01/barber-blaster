import "./unitys.css";
import Zap from "../../../assets/svgs/zap.svg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSimple from "../../../components/card-simple/card-simple";

function Unitys() {
  const data = [
    { id: 1, img: "https://iili.io/dUn3RRI.jpg" },
    { id: 2, img: "https://iili.io/dUn35Nt.jpg" },
    { id: 3, img: "https://iili.io/dUn37DX.jpg" },
    { id: 4, img: "https://iili.io/dUn3axn.jpg" },
  ];

  const dataEmp = [
    { id: 1, name: "CARLOS", src: "https://iili.io/dU0hcX4.jpg" },
    { id: 2, name: "REI NAVALHA", src: "https://iili.io/dU0h5es.jpg" },
    { id: 3, name: "JOÃO BARÃO", src: "https://iili.io/dU0hlLl.jpg" },
    { id: 4, name: "JOSÉ", src: "https://iili.io/dU0haIf.jpg" },
  ];

  return (
    <div>
      <div className="content-unity center">
        <div className="center text-units">
          <h1>Unidade Alvorada</h1>
          <p>
            O homem moderno também cuida da sua aparência e a barbearia BLASTER
            é o melhor lugar para fazer isso! Temos uma equipe com os melhores
            profissionais da cidade e condições especiais para você sair daqui
            de cabelo na régua!
          </p>
          <div className="btn">
            <button>
              <img width={38} src={Zap} alt="whtsapp" />
              Agende
            </button>
          </div>
        </div>
        <div className="video">
          <div className="carousel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.img} alt="barber" className="slide-item" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="content-teams ">
        {dataEmp.map((item) => (
          <CardSimple key={item.id} src={item.src} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Unitys;

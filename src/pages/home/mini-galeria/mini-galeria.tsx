import "./mini-galeria.css";
import Qrcode from "../../../assets/svgs/qr-code.svg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MiniGaleria() {
  const data = [
    { id: 1, img: "/src/assets/mini-galery/g1.jpg" },
    { id: 2, img: "/src/assets/mini-galery/g2.jpg" },
    { id: 3, img: "/src/assets/mini-galery/g3.jpg" },
    { id: 4, img: "/src/assets/mini-galery/g4.jpg" },
    { id: 5, img: "/src/assets/mini-galery/g5.jpg" },
    { id: 6, img: "/src/assets/mini-galery/g6.jpg" },
    { id: 7, img: "https://iili.io/dUn35Nt.jpg" },
    { id: 8, img: "https://iili.io/dUn37DX.jpg" },
    { id: 9, img: "https://iili.io/dUn3axn.jpg" },
  ];

  return (
    <div>
      <div className="container">
        <div className="poligon"></div>
        <div className="content-text">
          <h1>História</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
            assumenda quisquam similique, rerum cum dolore pariatur magnam ab
            eos quasi nihil ducimus distinctio recusandae dolores odio quo
            delectus excepturi!
          </p>
        </div>
        <div className="content-galery">
          <div className="carousel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={3}
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
      <div className="menu-qrcode">
        <div className="text-menu">
          <h1>Confira nosso cardapio no bar</h1>
          <p>
            Escaneie ou Clique no QR Code e veja tudo que a nossa barbearia
            oferece aos nossos clientes.
          </p>
        </div>
        <a href="https://iili.io/dUa8jja.jpg" target="blank">
          <img src={Qrcode} width={160} alt="menu qr code" />
        </a>
      </div>
    </div>
  );
}

export default MiniGaleria;

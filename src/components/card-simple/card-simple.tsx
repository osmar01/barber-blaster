import "./card-simple.css";
function CardSimple(img: any) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img.src} alt="" />
      </div>
      <p className="card-title">{img.name}</p>
      <p className="card-des">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        inventore natus modi repellendus dolorem unde odio sequi! Porro, cum
        maiores tempore suscipit laudantium perspiciatis, illo sunt,
        reprehenderit quae est blanditiis.
      </p>
    </div>
  );
}

export default CardSimple;

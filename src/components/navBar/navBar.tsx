import Insta from "../../assets/svgs/insta.svg";
import Face from "../../assets/svgs/face.svg";
import YT from "../../assets/svgs/youtube.svg";
import "./navBar.css";

function NavBar() {
  function showSidebar() {
    const sidebar: any = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar: any = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <div>
      <nav>
        <ul className="sidebar">
          <li>
            <a onClick={hideSidebar} href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Nossa Marca</a>
          </li>
          <li>
            <a href="#">Equipe Blaster</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <ul>
          <div className="icons">
            <a href="#">
              <img src={Insta} alt="facebook" />
            </a>
            <a href="#">
              <img src={Face} alt="instagram" />
            </a>
            <a href="#">
              <img src={YT} alt="youtube" />
            </a>
          </div>
          <li className="hideOnMobile">
            <a href="#">Nossa Marca</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Equipe Blaster</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Serviços</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Contato</a>
          </li>
          <li className="menu-button">
            <a href="#" onClick={showSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

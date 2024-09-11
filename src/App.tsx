import { Outlet } from "react-router";
import NavBar from "./components/navBar/navBar";
import "./App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {<Outlet />}
    </div>
  );
}

export default App;

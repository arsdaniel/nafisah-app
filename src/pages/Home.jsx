import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import { useState } from "react";
import Portfolio from "../component/Portfolio";
import "./home.scss"
import Menu from "../component/Menu";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="home">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Portfolio />
        </div>
      </div>
    </>
  );
};

export default Home;

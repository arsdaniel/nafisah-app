import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import { useState } from "react";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="home">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
        </div>
      </div>
    </>
  );
};

export default Home;

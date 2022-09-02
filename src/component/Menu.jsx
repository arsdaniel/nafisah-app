import "./menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/">Beranda</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">KAS</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Dana Haji</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/login">Masuk</Link>
        </li>
      </ul>
    </div>
  );
}
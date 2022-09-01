import styles from "./navbar.scss";
import { Person, Mail } from "@mui/icons-material";
import { LocationOn, Home } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            E-Nafish
          </a>
          <div className="itemContainer">
            <Home className="icon" />
            <span>Perumahan Nafisah Residen 2</span>
          </div>
          <div className="itemContainer">
            <LocationOn className="icon" />
            <span>Jl. Ampera Raya</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
import logo from "../assets/logo.png.jpeg";
import NavBar from "./navbar";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

// En-tête de la page
function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavBar />
    </header>
  );
};

export default Header;

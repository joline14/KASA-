import logo from "../assets/logo.png.jpeg";
import NavBar from "./navbar";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <NavBar />
    </header>
  );
};

export default Header;

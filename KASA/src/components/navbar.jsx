import { NavLink } from "react-router-dom";
import "../styles/header.css";

function NavBar() {
  const navLink1 = "Accueil";
  const navLink2 = "A propos";
  return (
    <div className="navBar">
      <NavLink to="/" className="link-underline">
        {navLink1}
      </NavLink>
      <NavLink to="/APropos" className="link-underline">
        {navLink2}
      </NavLink>
    </div>
  );
}
export default NavBar;

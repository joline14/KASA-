import { NavLink } from "react-router-dom";
import "../styles/header.css";


// Composant pour la barre de navigation
function NavBar() {

  // Déclaration des noms de lien de navigation
  const navLink1 = "Accueil";
  const navLink2 = "A propos";
  return (
    <nav className="navBar">
      <NavLink to="/" className="link-underline">
        {navLink1}
      </NavLink>
      <NavLink to="/APropos" className="link-underline">
        {navLink2}
      </NavLink>
    </nav>
  );
}
export default NavBar;

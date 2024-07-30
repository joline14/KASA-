import "../styles/header.css";

function NavBar() {
  const navLink1 = "Accueil";
  const navLink2 = "A propos";
  return (
    <div className="navBar">
      <a href="#">{navLink1}</a>
      <a href="#">{navLink2}</a>
    </div>
  );
}
export default NavBar;

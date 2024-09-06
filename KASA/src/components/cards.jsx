import "../styles/mains.css";
import { Link } from "react-router-dom";

function Cards({ location }) {
  return (
    // Création d'un lien vers la page location
    <Link to={`/location/${location.id}`} className="cards">
    {/* Affichage de l'img de couverture de la location */}
      <img className="cards-img" src={location.cover} alt={location.title} />
      <h1>{location.title}</h1>
    </Link>
  );
}

export default Cards;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import "../styles/location.css"

// Composant qui affiche une note sous forme d'étoiles
function Rating({ rating }) {
  const maxRating = 5
  const stars = []

    // Boucle pour créer les étoiles en fonction de la note reçue en prop
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={i} 
        icon={i <= rating ? filledStar : emptyStar} //Choix entre étoile pleine ou vide selon la note
        className={i <= rating ? 'star-icon filled' : 'star-icon empty'} // Applique le style CSS approprié
      />
    );
  }
  // Affiche la série d'étoiles
  return <div className="rating">{stars}</div>;
}

export default Rating


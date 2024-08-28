

const Rating = ({ rating }) => {
    const filledStars = parseInt(rating, 10); // Calcule nombre d'étoiles remplies
    const emptyStars = 5 - filledStars; // Calcule nombre d'étoiles vides
  
    return (
      <div className='rating'>
         {/* Affichage des étoiles remplies */}
        {Array(filledStars).fill().map((_, i) => (
          <span key={i} style={{ color: '#FF6060' }}>★</span>
        ))}
         {/* Affichage des étoiles vides */}
        {Array(emptyStars).fill().map((_, i) => (
          <span key={i + filledStars} style={{ color: '#E3E3E3' }}>☆</span>
        ))}
      </div>
    );
  };
  
export default Rating;
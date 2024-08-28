

const Rating = ({ rating }) => {
    const filledStars = parseInt(rating, 10);
    const emptyStars = 5 - filledStars;
  
    return (
      <div className='rating'>
        {Array(filledStars).fill().map((_, i) => (
          <span key={i} style={{ color: '#FF6060' }}>★</span>
        ))}
        {Array(emptyStars).fill().map((_, i) => (
          <span key={i + filledStars} style={{ color: '#E3E3E3' }}>☆</span>
        ))}
      </div>
    );
  };
  
export default Rating;
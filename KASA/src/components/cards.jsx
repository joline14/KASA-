import "../styles/mains.css";

function Cards({ location }) {
  return (
    <a href="#" className="cards">
      <img className="cards-img" src={location.cover} alt={location.title} />
      <h1>{location.title}</h1>
    </a>
  );
}
export default Cards;

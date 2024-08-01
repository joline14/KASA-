import "../styles/mains.css";
import logements from "../datas/logements.json";
import Cards from "../components/cards";

function Gallery() {
  return (
    <div className="gallery">
      {logements.map((location) => (
        <Cards key={location.id} location={location} />
      ))}
    </div>
  );
}

export default Gallery;

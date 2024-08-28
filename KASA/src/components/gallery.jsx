import "../styles/mains.css";
import logements from "../datas/logements.json";
import Cards from "../components/cards";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((location) => (
        <Cards key={location.id} location={location} />
      ))}
    </section>
  );
}

export default Gallery;

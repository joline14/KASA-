import "../styles/mains.css";
import location from "../datas/logements.json";
import Cards from "../components/cards";

//  Affichage de la liste des locations
function Gallery() {
  return (
    <section className="gallery">
      {location.map((location) => (
        // Création d'une carte pour chaque location
        <Cards key={location.id} location={location} />
      ))}
    </section>
  );
}

export default Gallery;


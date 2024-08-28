import { Navigate, useParams } from "react-router-dom";
import locations from "../datas/logements.json";
import Slides from "./slides";
import ToggleContent from "./toggleContent";
import Tags from "./tags";
import Rating from "./rating";
import Host from "./host";
import "../styles/location.css"

// Parcourt le tableau des locations pour trouver celle qui correspond à l'ID donné
const findLocationById = (id) => {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].id === id) {
            return locations[i];
        }
    }
    return undefined;  // Si aucune location n'est trouvée
};

function Location(){
    const { id } = useParams(); // Récupération de l'ID de l'URL
    const location = findLocationById(id); // Recherche la location par ID
    
    // Si la location n'existe pas, redirection vers la page d'erreur
    if (!location) return <Navigate to="/error" />;
    
    // Préparation des données pour les sections déroulantes (description et équipements)
    const toggleData = [
        { id: 1, title: "Description", text: location.description },
        { id: 2, title: "Équipements", text: location.equipments },
    ];

    return (
        <section className="location-section">
            <Slides pictures={location.pictures} title={location.title} />
            <div className="location-info">
                <h1>{location.title}</h1>
                <p>{location.location}</p>
            </div>
            <Tags tags={location.tags} />
            <div className="rating-host">
                <Rating rating={location.rating} />
                <Host name={location.host.name} picture={location.host.picture} />
            </div>
             {/* Affichage des sections déroulantes pour la description et les équipements */}
            <div className="toggle-location">
                <ToggleContent data={toggleData} />
            </div>
        </section>
    );
};

export default Location;


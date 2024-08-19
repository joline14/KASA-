import { Navigate, useParams } from "react-router-dom";
import locations from "../datas/logements.json";
import Slides from "./slides";
import ToggleContent from "./toggleContent";
import Tags from "./tags";
import Rating from "./rating";
import Host from "./host";
import "../styles/location.css"

const findLocation = (id) => {
    return locations.find((location) => location.id === id);
}

function Location(){
    const { id } = useParams();
    const location = findLocation(id);
    if (!location) {
        return <Navigate to="/error" />
    }

    const toggleData = [
        { id: 1, title: "Description", text: location.description },
        { id: 2, title: "Équipements", text: location.equipments }
    ];
    return (
        <section className="location-section">
            <Slides id={id} />
            <div className="location-info">
                <h1>{location.title}</h1>
                <p>{location.location}</p>
            </div>
            <Tags tags={location.tags} />
            <div className="rating-host">
                <Rating rating={location.rating} />
                <Host name={location.host.name} picture={location.host.picture} />
            </div>
            <div className="toggle-location">
                <ToggleContent data={toggleData} />
            </div>
        </section>
    );
};

export default Location;
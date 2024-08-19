import React, { useState } from "react";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import locations from "../datas/logements.json";



function findLocation(id) {
    return locations.find((location) => location.id === id);
}


function Slides({ id }) {

    const [location] = useState(() => findLocation(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const numberOfImages = location && location.pictures.length > 1;

    function nextImage() {
        // Calcule l'index de l'image suivante
        let nextIndex = currentImageIndex + 1;
        // Si l'index dépasse la dernière image, revenir à l'index 0
        if (nextIndex >= location.pictures.length) {
            nextIndex = 0;
        }
        setCurrentImageIndex(nextIndex);
    }

  
    function previousImage() {
        // Calcule l'index de l'image précédente
        let previousIndex = currentImageIndex - 1;
        // Si l'index est inférieur à zéro, revenir à l'index de la dernière image
        if (previousIndex < 0) {
            previousIndex = location.pictures.length - 1;
        }
        setCurrentImageIndex(previousIndex);
    }

    return (
        <div className="pictures">
            <img src={location && location.pictures[currentImageIndex]} alt={location && location.title} /> {/* On affiche l'image actuelle */}
            {numberOfImages && (
                <>  {/* On utilise la variable hasMultipleImages pour gérer l'affichage des flèches */}
                    <img className="arrowleft" src={arrowleft} alt="Flèche gauche" onClick={nextImage} />
                    <img className="arrowright" src={arrowright} alt="Flèche droite" onClick={previousImage} />
                    <div className="slide-info">
                        {currentImageIndex + 1} / {location.pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slides;
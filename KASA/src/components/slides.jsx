import React, { useState } from "react";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";

function Slides({ pictures, title }) {
    const [updateImageIndex, setUpdateImageIndex] = useState(0);  // État pour suivre l'img actuelle

    // Fonction pour aller à l'img suivante
    const goToNextImage = () => {
         // Incrémente l'index de l'img
        setUpdateImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    // Fonction pour aller à l'img précédente
    const goToPreviousImage = () => {
        // Décrémente l'index de l'img,
        setUpdateImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="pictures">
             {/* Affichage de l'img actuellement sélectionnée */}
            <img src={pictures[updateImageIndex]} alt={title} />
            {/* Affichage des flèches de navigation si plus d'une img est présente */}
            {pictures.length > 1 && (
                <>
                    <img className="arrowleft" src={arrowleft} alt="Flèche gauche" onClick={goToNextImage} />
                    <img className="arrowright" src={arrowright} alt="Flèche droite" onClick={goToPreviousImage} />
                    <div className="slide-info">
                        {/* Affichage de l'indice de l'img actuelle et le nombre total */}
                        {updateImageIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slides;
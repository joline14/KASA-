import React, { useState } from "react";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import locations from "../datas/logements.json";



function Slides({ pictures, title  }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="pictures">
            <img src={pictures[currentImageIndex]} alt={title} />
            {pictures.length > 1 &&  (
                <> 
                    <img className="arrowleft" src={arrowleft} alt="Flèche gauche" onClick={previousImage} />
                    <img className="arrowright" src={arrowright} alt="Flèche droite" onClick={nextImage} />
                    <div className="slide-info">
                        {currentImageIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slides;
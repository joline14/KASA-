import React, { useState } from "react";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";

function Slides({ pictures, title  }) {

    const [updateImageIndex, setUpdateImageIndex] = useState(0);

    const goToNextImage = () => {
        setUpdateImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const goToPreviousImage = () => {
        setUpdateImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="pictures">
            <img src={pictures[updateImageIndex]} alt={title} />
            {pictures.length > 1 &&  (
                <> 
                    <img className="arrowleft" src={arrowleft} alt="Flèche gauche" onClick={goToNextImage} />
                    <img className="arrowright" src={arrowright} alt="Flèche droite" onClick={goToPreviousImage} />
                    <div className="slide-info">
                        {updateImageIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slides;
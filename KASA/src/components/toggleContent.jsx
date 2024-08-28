import React, { useState } from "react";
import Toggle from "./toggle";
import arrow from "../assets/arrow.svg"; 
import "../styles/apropos.css"


function ToggleContent ({ data }) {
    const [isOpen, setIsOpen] = useState({});// Utilisation du hook useState pour gérer l'état d'ouverture de chaque élément

    // Fonction pour basculer l'état d'ouverture d'un élément
    const toggleOpen = (index) => {
        setIsOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="Toggle-section">
            {data.map((item, index) => (
                <div key={item.id} className="Toggle">
                    <div className="Toggle-header" onClick={() => toggleOpen(index)}>
                        <img src={arrow} alt="flèche menu déroulant" className={`arrow ${isOpen [index] ? 'open' : ''}`} /> 
                        <h3>{item.title}</h3> 
                    </div>
                    <Toggle isOpen={isOpen [index]}>{item.text}</Toggle> 
                </div>
            ))}
        </div>
    );
};

export default ToggleContent; 

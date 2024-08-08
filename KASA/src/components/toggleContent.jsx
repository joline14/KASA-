import React, { useState } from "react";
import PropTypes from "prop-types"; 
import Toggle from "./toggle";
import arrow from "../assets/arrow.svg"; 
import "../styles/apropos.css"


function ToggleContent ({ data }) {
    const [isOpen, setIsOpen] = useState(Array(data.length).fill(false)); // Utilisation du hook useState pour gérer l'état d'ouverture de chaque élément

    // Fonction pour basculer l'état d'ouverture d'un élément
    const toggleOpen = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState]; // Création d'une nouvelle copie de l'état actuel
            newState[index] = !newState[index]; // Inversion de l'état d'ouverture de l'élément spécifié
            return newState; // Retourne le nouvel état mis à jour
        });
    };

    return (
        <div className="Toggle-section">
            {data.map((item, i) => (
                <div key={item.id} className="Toggle">
                    <div className="Toggle-header" onClick={() => toggleOpen(i)}>
                        <img src={arrow} alt="flèche menu déroulant" className={`arrow ${isOpen[i] ? 'toggled' : ''}`} /> 
                        <h3>{item.title}</h3> 
                    </div>
                    <Toggle isOpen={isOpen[i]}>{item.text}</Toggle> 
                </div>
            ))}
        </div>
    );
};

ToggleContent.propTypes = {
    data: PropTypes.arrayOf( // Les données doivent être un tableau d'objets avec des propriétés spécifiques
        PropTypes.shape({
            id: PropTypes.number.isRequired, // L'ID doit être un nombre et est requis
            title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères et est requis
            text: PropTypes.oneOfType([ // Le texte peut être :
                PropTypes.string, // une chaîne de caractères 
                PropTypes.arrayOf(PropTypes.string) // ou un tableau de chaînes de caractères 
            ]).isRequired // et est requis
        })
    ).isRequired
};

export default ToggleContent; 
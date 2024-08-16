import { NavLink } from "react-router-dom";
import "../styles/erreur.css"

function ErreurPage () {
    return (
        <div className="erreur">
            <h3>404</h3>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <p className="link">Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    );
};

export default ErreurPage;
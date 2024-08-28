import { NavLink } from "react-router-dom";
import "../styles/erreur.css"
import Main from "../components/main";

function ErreurPage () {
    return (
        <Main>
        <div className="erreur">
            <h3>404</h3>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <p className="link">Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
        </Main>
    );
};

export default ErreurPage;
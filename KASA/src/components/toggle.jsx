
function Toggle({ isOpen, children}) {
    return ( 
        // Conteneur qui bascule entre ouvert et fermé selon l'état isOpen
        <div className={`Toggle-content ${isOpen ? 'slide-down' : 'slide-up'}`}>
              {/* Si "children" est un tableau, afficher chaque élément */}
            {Array.isArray(children) ? (
                children.map((paragraph, index) => (
                    <p key={index} className={isOpen ? 'slide-down-text' : 'slide-up-text'}>
                        {paragraph}
                    </p>
                ))
            ) : (
                // Affiche "children" directement si ce n'est pas un tableau
                <p className={isOpen ? 'slide-down-text' : 'slide-up-text'}>
                    {children}
                </p>
            )}
        </div>
    );
}

export default Toggle;


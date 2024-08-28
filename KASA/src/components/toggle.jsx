
function Toggle({ isOpen, children }) {
    return ( 
        // Conteneur qui bascule entre ouvert et fermé selon l'état isOpen
        <div className={`Toggle-content ${isOpen ? 'slide-down' : 'slide-up'}`}>
            {Array.isArray(children) ? (
                children.map((paragraph, index) => (
                    <p key={index} className={isOpen ? 'slide-down-text' : 'slide-up-text'}>
                        {paragraph}
                    </p>
                ))
            ) : (
                <p className={isOpen ? 'slide-down-text' : 'slide-up-text'}>
                    {children}
                </p>
            )}
        </div>
    );
}

export default Toggle;

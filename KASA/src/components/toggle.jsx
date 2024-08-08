import PropTypes from "prop-types";


function Toggle({ isOpen, children }) {
    return ( 
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

Toggle.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

export default Toggle;

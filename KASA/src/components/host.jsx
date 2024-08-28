

const Host = ({ name, picture }) => {
    return (
        <div className="Host">
            <p className="host-name">{name}</p>
            <img src={picture} alt={name} className="host-picture" />

        </div>
    );
};

export default Host;
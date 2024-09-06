
const Tags = ({ tags }) => {
    return (
        //Affichage de chaque tag sous forme de span
        <div className="location-tags">
            {/* Parcours le tableau des tags */}
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
};

export default Tags;
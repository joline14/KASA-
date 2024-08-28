
const Tags = ({ tags }) => {
    return (
        //Affichage de chaque tag 
        <div className="location-tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
};

export default Tags;
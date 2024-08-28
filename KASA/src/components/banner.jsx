function Banner({ imageSrc, imageClass, title, alt }) {
  return (
    <section className="banner">
      <img src={imageSrc} alt={alt} className={imageClass} />
            {/* Affichage du titre si présent */}
      {title && <h1>{title}</h1>}
    </section>
  );
}

export default Banner;

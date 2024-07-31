import banner from "../assets/banner.png.png";
import "../styles/mains.css";

function Banner() {
  const title = "Chez vous,partout et ailleurs";
  return (
    <div className="banner">
      <img src={banner} alt="image banner" className="banner-img" />
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

export default Banner;

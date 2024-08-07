import Banner from "../components/banner"
import BannerImg from "../assets/banner.png.png";
import Gallery from "../components/gallery";

function HomePage() {
  return (
    <div>
      <Banner imageSrc={BannerImg} alt="Photographie de falaises" title="Chez vous, partout et ailleurs" imageClass="banner-img" />
      <Gallery />
    </div>
  );
}

export default HomePage;

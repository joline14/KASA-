import Banner from "../components/banner"
import BannerImg from "../assets/banner.png.png";
import Gallery from "../components/gallery";
import Main from "../components/main";

function HomePage() {
  return (
    <Main>
      <Banner imageSrc={BannerImg} alt="Photographie de falaises" title="Chez vous, partout et ailleurs" imageClass="banner-img" />
      <Gallery />
    </Main>
  );
}

export default HomePage;

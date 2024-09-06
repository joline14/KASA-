import Banner from "../components/banner";
import BannerImg from "../assets/APropos-img.png";
import ToggleContent from "../components/toggleContent";
import Main from "../components/main"
import aProposData from "../datas/aPropos.json";

// Page Apropos 
function AproposKasa() {
    return (
        <Main>
            <Banner imageSrc={BannerImg} alt="Photographie de vallée" imageClass="img-about" />
            <section className="toggle-apropos">
                {/* Composant ToggleContent pour afficher les sections à bascule*/}
                <ToggleContent data={aProposData} width="full" />
            </section>
        </Main>
    );
};

export default AproposKasa;
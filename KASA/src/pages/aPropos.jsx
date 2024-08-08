import Banner from "../components/banner";
import BannerImg from "../assets/APropos-img.png";
import ToggleContent from "../components/toggleContent";
import aProposData from "../datas/aPropos.json";

function AproposKasa() {
    return (
        <div>
            <Banner imageSrc={BannerImg} alt="Photographie de vallée" imageClass="img-about" />
            <div className="toggle-apropos">
                <ToggleContent data={aProposData} />
            </div>
        </div>
    );
};

export default AproposKasa;
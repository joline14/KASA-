import logoFooter from "../assets/logo-footer.png.svg";
import "../styles/footer.css";

function Footer() {
  const desciption = "© 2020 Kasa. All rights reserved";
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo kasa" />
      <h4>{desciption}</h4>
    </div>
  );
}

export default Footer;

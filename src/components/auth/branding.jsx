import { Image } from "react-bootstrap";
import SocialLinks from "../common/social-links";
import "./branding.scss";

const Branding = () => {
  return (
    <div className="branding-wrapper">
      <div className="image-wrapper">
        <Image src="/logos/logo-white.png" fluid />
      </div>
      <div className="logo-text">International Labour Association</div>
      <div className="social-links-wrapper">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Branding;

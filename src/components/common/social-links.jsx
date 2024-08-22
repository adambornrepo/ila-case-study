import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import './social-links.scss';

const SocialLinks = () => {
  return (
    <>
      <div className="social-links">
        <a
          className="social-twitter-button"
          href="https://x.com/iladesk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          className="social-facebook-button"
          href="https://www.facebook.com/iladesk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook />
        </a>
        <a
          className="social-instagram-button"
          href="https://www.instagram.com/ilaboureu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram />
        </a>
        <a
          className="social-linkedin-button"
          href="https://www.linkedin.com/company/iladesk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;

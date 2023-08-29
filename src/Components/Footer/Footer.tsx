import "./Footer.scss";
import linkedinLogo from "../../assets/images/1632521_circle_linkedin_round icon_social media_social network_icon.svg";
import githubLogo from "../../assets/images/github-mark.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__images">
        <img
          id="githubLogo"
          className="footer__image--logo"
          src={githubLogo}
          alt="Github Logo"
        />
        <img
          id="linkedinLogo"
          className="footer__image--logo"
          src={linkedinLogo}
          alt="Linkedin Logo"
        />
      </div>
      <p className="footer__text">maxswainework@gmail.com</p>
    </footer>
  );
};

export default Footer;

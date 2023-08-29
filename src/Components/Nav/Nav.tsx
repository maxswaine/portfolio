import "./Nav.scss"; 
import hamburgerMenu from "../../assets/images/hamburger-menu-svgrepo-com.svg";
import button from "../../assets/images/Frame 1.svg";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__logo">Max Swaine</h1>
      <div className="nav__tabs">
        <div className="nav__dropdown">
          <img
            className="nav__icon"
            src={hamburgerMenu}
            alt="menu-burger icons"
          />
        </div>
        <a className="nav__button" href="#">
          Home
        </a>
        <a className="nav__button" href="#about__start">
          About
        </a>
        <a className="nav__button" href="#projects">
          Projects
        </a>
        <img
          src={button}
          alt="get in touch button"
          className="nav__button nav__button--button-right"
        />
      </div>
    </div>
  );
};

export default Nav;

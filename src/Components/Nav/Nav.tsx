import "./Nav.scss";
import 

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">Max Swaine</h1>
      <div className="nav__tabs">
        <div className="nav__dropdown">
          <img
            className="nav__icon"
            src="./images/hamburger-menu-svgrepo-com.svg"
            alt="menu-burger icons"
          />
        </div>
        <a className="nav__button" href="#">
          Home
        </a>
        <a className="nav__button">About</a>
        <a className="nav__button">Projects</a>
        <img
          className="nav__button nav__button--button-right"
          href="#"
          src="./images/Frame 1.svg"
          alt="Get in touch button"
        />
      </div>
    </nav>
  );
};

export default Nav;

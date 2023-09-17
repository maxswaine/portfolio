import "./Nav.scss";
import button from "../../assets/images/Frame 1.svg";
import { HashLink } from "react-router-hash-link";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import blackCross from "../../assets/images/black-cross.png";

const Nav = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleGetInTouch = () => {
    setShowPopup(!showPopup);
  };

  const handleClose = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="nav">
      <h1 className="nav__logo">Max Swaine</h1>
      <div className="nav__tabs">
        <div className="nav__dropdown">
          <Sidebar />
        </div>
        <a className="nav__button" href="#">
          Home
        </a>
        <HashLink className="nav__button" smooth to="#about">
          About
        </HashLink>
        <HashLink smooth to="/#projects" className="nav__button">
          Projects
        </HashLink>
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

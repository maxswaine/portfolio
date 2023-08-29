import profilePicture from "../../assets/images/IMG_1905.jpg";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <h2 className="intro__title">Hey! I'm Max Swaine</h2>
      <div className="intro__area">
        <h3 className="intro__area--subtitle">
          A Junior <span>Software Developer</span> based in the UK
        </h3>
        <img
          className="intro__area--image"
          src={profilePicture}
          alt="pic of me"
        />
      </div>
      <button className="intro__button">Take a look at my work ↯</button>
    </section>
  );
};

export default Intro;

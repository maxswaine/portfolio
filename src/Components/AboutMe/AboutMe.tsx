import "./AboutMe.scss";
import photo from "../../assets/images/Saly-13.svg";
import profilePicture from "../../assets/images/IMG_2474.jpg";

const AboutMe = () => {
  return (
    <section className="about">
      <h2 id="about__start" className="about__title">
        About Me
      </h2>

      <div className="about__area">
        <p className="about__description">
          Hi, I’m Max and this is my website! I am a Technology Consultant for
          _nology. I am currently learning to become a Full Stack Software
          Engineer with skills in HTML, SCSS, Javascript, React and more!
          <br />
          <br />I have a Joint Honours BA in Political Science with Philosophy
          which has equipped me with logic and reasoning skills to start my path
          to become a Software Engineer. I love building things and being
          creative, but also enjoy problem solving and coming up with solutions
          to problems which is why I am so passionate about this stage of my
          career. I want to use the skills I have gained from _nology to
          eventually become an Environmental Technology Engineer and use
          Software Engineering to save the planet, rather than destroy it.{" "}
          <br />
          <br />
          Feel free to click the links at the bottom to see my LinkedIn and
          Github profiles to keep up with what I’m doing.
          <br />
          <br />I also have interests outside of Software Engineering; I love
          going to see live music (as someone who plays guitar myself), playing
          tennis, organising hikes but also simply spending time with my friends
          and family.
        </p>
        <img
          className="about__image--self"
          src={profilePicture}
          alt="pic of me"
        />
        <img className="about__image--cartoon" src={photo} />
      </div>
    </section>
  );
};

export default AboutMe;

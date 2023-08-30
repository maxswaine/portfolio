import Nav from "./Components/Nav/Nav";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import projects from "./Data/data";
import { HashRouter } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Nav />
        <Intro />
        <Skills />
        <Projects projects={projects} />
        <AboutMe />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

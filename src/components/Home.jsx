import "../style/Home.css";
import guripic from "../assets/guripic.webp";
import Footer from "./Footer";
import { useState } from "react";
import Contact from "./Contact";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
import { IoMenu, IoClose } from "react-icons/io5";

const Home = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fb">

      <div className="navbaarp">

        <div className="gurilogo">
          <img src={guripic} alt="logo" />
          <span>The Guri Rai</span>
        </div>

        <div className="navbaarc1">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#Education">Education</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menuicon">
          {showMenu ? (
            <IoClose size={28} onClick={() => setShowMenu(false)} />
          ) : (
            <IoMenu size={28} onClick={() => setShowMenu(true)} />
          )}
        </div>

         {showMenu ? (
        <div className="mobilemenu">
          <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
          <a href="#about" onClick={() => setShowMenu(false)}>About</a>
          <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
          <a href="#Education" onClick={() => setShowMenu(false)}>Education</a>
          <a href="#work" onClick={() => setShowMenu(false)}>Work</a>
          <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
        </div> 
      ):null}

      </div>

      <div id="home"></div>

      <div className="herosection">
        <div className="hc1">
          <div className="htextdiv">
            <span className="iamguri">Hi, I'm Guri </span>
            <span className="rai">Rai</span>
            <p>I'm a <span className="sdtext">Software Developer</span></p>
          </div>

          <div className="hc1but">
            <a href="#contact">
              <button className="hc1b1">Hire Me</button>
            </a>
            <a href="#work">
              <button className="hc1b2">View Work</button>
            </a>
          </div>
        </div>

        <div className="hc2">
          <img className="gurihc2" src={guripic} alt="profile" />
        </div>
      </div>

      <About />
      <Skills />
      <Education />
      <Work />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;

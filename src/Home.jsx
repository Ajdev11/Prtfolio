import { React, useEffect} from "react";
import { gsap } from "gsap";
import Aj from "../src/assets/Images/Aj.jpg";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, opacity: 0 } });
    tl.to("#zero", { y: -150 });
    tl.to("#fifty", { y: -300 });
    tl.to("#hundred", { y: -480 });
    tl.to(".Intro", { duration: 2, y: -700, opacity: 1 });
    tl.from(".MainPage", { opacity: 0, duration: 0.01, y: 500 });
    tl.to(".MainPage", { opacity: 1, duration: 2, y: -670 });
  }, []);

  return (
    <div>
      <div className="Intro">
        <div className="name">
          OLASENI <br />
          MOSES.O. <br />
          PORTFOLIO <br /> &copy; 2022
        </div>
        <div>
          <h1 className="Counts">
            <span id="hundred">100</span> <span id="fifty">50</span>{" "}
            <span id="zero">0</span>
          </h1>
        </div>
      </div>
      <div className="MainPage">
        <navBar>
          <div>
            <p className="myName">Olaseni Moses</p>
          </div>
          <div>
            <p className="menu">Menu</p>
          </div>
        </navBar>
        <p className="support">
          I DEVELOP FRONTEND DESIGNS <br /> AS A FREELANCER
          <br /> FOR AGENCIES.
        </p>
        <h1 className="developer">
          CREATIVE <br /> FRONTEND <br /> DEVELOPER...
        </h1>
        <div className="imageBorder">
          <img id="img1" src={Aj} alt="Olaseni Moses" />
        </div>
        <div>
          <h1 className="developer">
            MOSES <br /> OLASENI.O.{" "}
          </h1>
          <p className="sn">01/</p>
          <p className="About">
            EXTENSIVELY CURIOUS ABOUT <br /> WEB STACKS TECHNOLOGIES. <br /> I
            LOVE WORKING WITH REACT, <br /> GSAP, JAVASCRIPT, CUSTOM <br />{" "}
            CSS/TAILWINDCSS/SASS TO
            <br /> CREATE USER-FRIENDLY INTERFACES. <br /> I LOVE TO GIVE USERS
            A FUN <br /> AND MEMORABLE WEB EXPERIENCES.{" "}
          </p>
          <p className="About2">
            However, experienced in using the git tools for collaborative works
            with developers. I've worked closely with product designers remotely
            to build websites for individuals and companies. With my experience
            i've been able to solve technical problems and developed usable web
            experience.
          </p>
        </div>
        <div className="ProjectSection">
          <div className="flex-project">
            <p className="sn2">02/</p>
            <p className="recent">
              RECENT <br /> PROJECTS{" "}
            </p>
          </div>
          <h1 className="Project1">
            MY
            <span className="Projects-line1"></span>
            PORTFOLIO
            <span className="Projects-line2"></span>
          </h1>
          <p className="projects-desc">
            MY PERSONAL WEB <br /> PORTFOLIO
          </p>
          <div className="rounded-circle">
            <p className="See-More">
              See <br /> more
            </p>
          </div>
          <h1 className="Project1">
            MY
            <span className="Projects-line1"></span>
            PORTFOLIO
            <span className="Projects-line2"></span>
          </h1>
          <p className="projects-desc">
            MY PERSONAL WEB <br /> PORTFOLIO
          </p>
          <div className="rounded-circle">
            <p className="See-More">
              See <br /> more
            </p>
          </div>
          <div className="flex-project" id="About-3">
            <p className="sn2">03/</p>
            <p className="recent">ABOUT ME</p>
          </div>
          <div className="hobbies">
            <h1>TENNIS,</h1> <br />
            <h1>CHESS,</h1> <br />
            <br />
            <h1>MUSIC,</h1> <br />
            <br />
            <br />
            <h1>FOOTBALL.</h1>
          </div>
          <div className="hobbies-desc">
            <p>
              When not coding,i so much enjoy playing tennis and chess,However
              i'm an Arsenal fan and i love listening to soothing music.
            </p>
          </div>
        </div>
        <footer>
          <p>Olaseni Moses.O.</p>
          <p>FrontEnd Dev.</p>
          <br />
          <div className="socials">
            <Link className="footer-links" to="/">Twitter,</Link>
            <Link className="footer-links" to="/">Github</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

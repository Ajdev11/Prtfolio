import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Aj from "../src/assets/Images/Aj.jpg";

function Section1() {
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
        <div className="header">
          <div className="myName">
            <p>Olaseni Moses</p>
          </div>
          <div className="menu">
            <p>Menu</p>
          </div>
        </div>
        <div>
          <p className="support">
            I DEVELOP FRONTEND DESIGNS <br /> AS A FREELANCER
            <br /> FOR AGENCIES.
          </p>
          <h1 className="developer">
            CREATIVE <br /> FRONTEND <br /> DEVELOPER...
          </h1>
        </div>
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
      </div>
    </div>
  );
}

export default Section1;

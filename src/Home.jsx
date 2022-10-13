import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aj from "../src/assets/Images/Aj.jpg";


function Home() {
  gsap.registerPlugin(ScrollTrigger);
  /* useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, opacity: 0 } });
    tl.to("#zero", { y: -150 });
    tl.to("#fifty", { y: -300 });
    tl.to("#hundred", { y: -480 });
    tl.to(".Intro", { duration: 2, y: -700, opacity: 1 });
    tl.from(".MainPage", { opacity: 0, duration: 0.01, y: 500 });
    tl.to(".MainPage", { opacity: 1, duration: 2, y: -670 });
  }, []);*/

  //scrolltrigger for support
  useEffect(() => {
    const gs = gsap.timeline();
    gs.to(".support", { y: 200, opacity: 0 });
    gs.to(".support", {
      y: 20,
      opacity: 1,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".support",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //scroll for Dev
    gs.to(".Dev", { y: -50, opacity: 0 });
    gs.to(".Dev", {
      y: 50,
      opacity: 1,
      duration: 5,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".Dev",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //scroll for About
    gs.to(".About", { y: -50, opacity: 0 });
    gs.to(".About", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".About",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //scroll for About2
    gs.to(".About2", { y: -50, opacity: 0 });
    gs.to(".About2", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".About2",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //Scroll for Project-one
    gs.to(".Project-one", { y: -50, opacity: 0 });
    gs.to(".Project-one", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".Project-one",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //Scroll for See more images
    gs.to(".rounded-circle", { y: -50, opacity: 0 });
    gs.to(".rounded-circle", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".rounded-circle",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //Scroll for hobbies
    gs.to(".hobbies", { y: -50, opacity: 0 });
    gs.to(".hobbies", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".hobbies",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
    //Scroll for hobbies-desc
    gs.to(".hobbies-desc", { y: -50, opacity: 0 });
    gs.to(".hobbies-desc", {
      y: 50,
      opacity: 2,
      duration: 3,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".hobbies-desc",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
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
        <div className="Dev">
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
          </div>
        </div>
        <p className="sn">01/</p>
        <p className="About">
          EXTENSIVELY CURIOUS ABOUT <br /> WEB STACKS TECHNOLOGIES. <br /> I
          LOVE WORKING WITH REACT, <br /> GSAP, JAVASCRIPT, CUSTOM <br />{" "}
          CSS/TAILWINDCSS/SASS TO
          <br /> CREATE USER-FRIENDLY INTERFACES. <br /> I LOVE TO GIVE USERS A
          FUN <br /> AND MEMORABLE WEB EXPERIENCES.{" "}
        </p>
        <p className="About2">
          However, experienced in using the git tools for collaborative works
          with developers. I've worked closely with product designers remotely
          to build websites for individuals and companies. With my experience
          i've been able to solve technical problems and developed usable web
          experience.
        </p>
        <div className="ProjectSection">
          <div className="flex-project">
            <p className="sn2">02/</p>
            <p className="recent">
              RECENT <br /> PROJECTS{" "}
            </p>
          </div>
          <div className="Project-one">
            <h1 className="Project1">
              MY
              <span className="Projects-line1"></span>
              PORTFOLIO
              <span className="Projects-line2"></span>
            </h1>
            <p className="projects-desc">
              MY PERSONAL WEB <br /> PORTFOLIO
            </p>
          </div>

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
            <Link className="footer-links" to="/">
              Twitter,
            </Link>
            <Link className="footer-links" to="/">
              Github
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

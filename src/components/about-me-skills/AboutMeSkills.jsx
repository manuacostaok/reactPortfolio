import "./about-me-skills.css";
import html from "../pictures/skills/html.png";
import css from "../pictures/skills/css.png";
import javascript from "../pictures/skills/javascript.png";
import reactjs from "../pictures/skills/reactjs.png";
import git from "../pictures/skills/git.png";
import firebase from "../pictures/skills/firebase.png";
import npm from "../pictures/skills/npm.png";
import curriculum from "./cvManAcosta2023.pdf";

export const AboutMeSkills = () => {
  return (
    <section className="purple-background">
      <div className="about-me">
        <h2>About me</h2>
        <p>
          I'm a 27 years old Full Stack Developer , i love Front-end Developing, and entrepeneur from Argentina.
          I started my journey in 2018 in my college "UNGS" on my City, San Miguel where I learned
          everything about POO, then i learn . A year later I decided to learn programming Web Developing on course of Google and the project "Arg Programa"
          and i decided to dedicate my life to bringing ideas to life in the browser. I'm
          confident, naturally curious, and perpetually working on improving my
          coding skills one problem at a time.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-pictures-div">
          <div className="skill-div">
            <img src={html} />
            <label>Html-5</label>
          </div>
          <div className="skill-div">
            <img src={css} />
            <label>Css3</label>
          </div>
          <div className="skill-div">
            
            <label>Sass</label>
          </div>
          <div className="skill-div">
            
            <label>Tailwind</label>
          </div>
          <div className="skill-div">
            <img src={javascript} />
            <label>JavaScript</label>
          </div>
          <div className="skill-div">
            <img src={reactjs} />
            <label>React JS</label>
          </div>
          <div className="skill-div">
            <img src={git} />
            <label>Git</label>
          </div>
          <div className="skill-div">
            <img src={firebase} />
            <label>Firebase</label>
          </div>
          <div className="skill-div">
            <img src={npm} />
            <label>Npm</label>
          </div>
        </div>
      </div>
      <a className="download-cv" target="_blank" download href={curriculum}>
        DOWNLOAD CV
      </a>
    </section>
  );
};
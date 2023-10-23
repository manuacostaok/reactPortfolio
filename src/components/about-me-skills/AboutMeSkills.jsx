import "./about-me-skills.css";
import html from "../pictures/skills/html.png";
import css from "../pictures/skills/css.png";
import javascript from "../pictures/skills/javascript.png";
import reactjs from "../pictures/skills/reactjs.png";
import angular from "../pictures/skills/angular.png";
import docker from "../pictures/skills/docker.png";
import phpmysql from "../pictures/skills/phpmysql.png";
import psql from "../pictures/skills/psql.png";
import git from "../pictures/skills/git.png";
import firebase from "../pictures/skills/firebase.png";
import npm from "../pictures/skills/npm.png";
import java from "../pictures/skills/java.png";
import ruby from "../pictures/skills/ruby.png";
import curriculum from "./cvManAcosta2023.pdf";



export const AboutMeSkills = () => {
  return (
    <section className="purple-background">
      
      <div className="about-me">
        <h2>About me</h2>
        <p>
          I'm a 27 years old Full Stack Developer from Argentina, i love Front-end developing, but im a proactive person so i can do everything that i propose.
          I started my journey in 2018 in my college "UNGS" on my City, San Miguel, where I learned
          everything about OOP, then i decided to learn programming Web Developing on courses of Google on my free time for later do the statal project "Arg Programa" that help me to apply these knowledge on a App project but like a personal portfolio, that was there where i fall in love doing the front end. 
          In a fact i decided to dedicate my life to bringing ideas to life in the browser. I'm
          confident, naturally curious, and perpetually working on improving my
          coding skills one problem at a time with peace and love.
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
          <img src={angular} />
            <label>Angular</label>
          </div>
          <div className="skill-div">
            <img src={javascript} />
            <label>JavaScript</label>
          </div>
          <div className="skill-div">
            <img src={java} />
            <label>Java</label>
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
          <img src={docker} />
            <label>Docker</label>
          </div>
          <div className="skill-div">
            <img src={firebase} />
            <label>Firebase</label>
          </div>
          <div className="skill-div">
            <img src={npm} />
            <label>Npm</label>
          </div>
          <div className="skill-div">
            <img src={phpmysql} />
            <label>Php/MySQL</label>
          </div>
          <div className="skill-div">
            <img src={psql} />
            <label>PSQL</label>
          </div>
          <div className="skill-div">
            <img src={ruby} />
            <label>Ruby</label>
          </div>
          
        </div>
      </div>
      <a className="download-cv" target="_blank" download href={curriculum}>
        DOWNLOAD CV
      </a>
    </section>
  );
};
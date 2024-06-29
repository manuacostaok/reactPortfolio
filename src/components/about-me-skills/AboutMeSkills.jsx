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
        I'm a 28-year-old Full Stack Developer from Argentina. I love Front-end development, but I'm a proactive person, so I can do anything I set my mind to.

I started my journey in 2018 at my college, UNGS, in my city, San Miguel, where I learned everything about OOP. Then, I decided to learn web development through Google courses in my free time. Later, I participated in the state project "Arg Programa," which helped me apply this knowledge to an app project that served as my personal portfolio. It was there that I fell in love with front-end development.
Recently, I developed an Android application that registers entries and exits with facial recognition as part of completing my career as a Systems Technician.
In fact, I decided to dedicate my life to bringing ideas to life in the browser. I'm confident, naturally curious, and always working on improving my coding skills one problem at a time, with peace and love.
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
            <img src={javascript} />
            <label>JavaScript</label>
          </div>
          <div className="skill-div">
          <img src={angular} />
            <label>Angular</label>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin" />
            <label>Kotlin</label>
          </div>
          <div className="skill-div">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
          <label>Python</label>

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

          
          
        </div>
      </div>
      <a className="download-cv" target="_blank" download href={curriculum}>
        DOWNLOAD CV
      </a>
    </section>
  );
};
import "./recentwork.css";
import visit from "./pictures/open.png";
import github from "./pictures/github.png";
import { useState } from "react";

export const RecentWork = () => {
  const [isActiveInmo, setIsactiveInmo] = useState(false);
  const [isActiveConst, setIsactiveConst] = useState(false);
  const [isActiveJournal, setIsactiveJournal] = useState(false);
  const [isActiveHeros, setIsactiveHeros] = useState(false);
  const [isActiveGiphy, setIsactiveGiphy] = useState(false);
  const [isActiveNews, setIsactiveNews] = useState(false);

  const toggleClassInmo = () => {
    setIsactiveInmo(!isActiveInmo);
  };

  const toggleClassNews = () => {
    setIsactiveNews(!isActiveNews);
  };

  const toggleClassConst = () => {
    setIsactiveConst(!isActiveConst);
  };

  const toggleClassJournal = () => {
    setIsactiveJournal(!isActiveJournal);
  };

  const toggleClassHeros = () => {
    setIsactiveHeros(!isActiveHeros);
  };

  const toggleClassGiphy = () => {
    setIsactiveGiphy(!isActiveGiphy);
  };

  return (
    <section className="projects-section">
      <div className="projects-text-div">
        <h2>Projects</h2>
        <p>Here are a few projects I've worked on recently.</p>
        <label className="click-to">
          Click the images to see descriptions.
        </label>
      </div>
      <div className="projects">
        <div className="project-div">
          <label>Fuera Luces/Lights Off</label>
          <span />
          <div
            className={
              !isActiveInmo ? "project inmobiliaria" : "project-active"
            }
            onClick={toggleClassInmo}
          >
            <p>
              This was created for the college with Java. <br /> 
               <br />The objective was train the developing in distincts caps, one for the logic, one for the design, and the last for the data. 
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://www.inmobiliariamarinatortarolo.com/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/inmobiliaria-react/tree/main"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Construction Company Website</label>
          <span />

          <div
            className={!isActiveConst ? "project senderos" : "project-active"}
            onClick={toggleClassConst}
          >
            <p>
              This was created for a client, he wanted a simple website with a
              contact form. <br /> The client is taking pictures so I can finish
              it and send it to production. <br />
              Made with Javascript.
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://renatopiermarini.github.io/senderos-construcciones/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/senderos-construcciones/tree/main"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>News App</label>
          <span />
          <div
            className={!isActiveNews ? "project news" : "project-active"}
            onClick={toggleClassNews}
          >
            <p>
              This is a website I made with a public news api. It gives you the
              latest news from different sources just by typing a word.
            </p>
          </div>

          <div className="visit-code">
            <a href="https://news-app-flax.vercel.app/" target="_blank">
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/news-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Journal App</label>
          <span />

          <div
            className={!isActiveJournal ? "project journal" : "project-active"}
            onClick={toggleClassJournal}
          >
            <p>
              This is a Journal App. It has Firebase Authentication and Redux.
              It's made to keep private notes.
            </p>
          </div>

          <div className="visit-code">
            <a href="https://react-journal-app-six.vercel.app" target="_blank">
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/react-journal-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Hero App</label>
          <span />

          <div
            className={!isActiveHeros ? "project heros" : "project-active"}
            onClick={toggleClassHeros}
          >
            <p>Fun project I made to learn react-router-dom.</p>
          </div>

          <div className="visit-code">
            <a href="https://react-hero-app.vercel.app/" target="_blank">
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/react-hero-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Giphy Expert App</label>
          <span />

          <div
            className={!isActiveGiphy ? "project giphy" : "project-active"}
            onClick={toggleClassGiphy}
          >
            <p>
              This was one of my first projects. I was learning how to work with
              APIS. It's really simple but still a fun work to share.
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://renatopiermarini.github.io/gif-expert-app/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/gif-expert-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
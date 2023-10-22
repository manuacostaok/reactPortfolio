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
              href="https://github.com/manuacostaok/FueraLuces"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Clima App</label>
          <span />

          <div
            className={!isActiveConst ? "project senderos" : "project-active"}
            onClick={toggleClassConst}
          >
            <p>
              This was created for my portfolio, the app is one of the common on the work of the developers. <br />  <br />
              Its simple page 
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://appclima-e3491.web.app"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/manuacostaok/AppClima"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>UNGS War</label>
          <span />
          <div
            className={!isActiveNews ? "project news" : "project-active"}
            onClick={toggleClassNews}
          >
            <p>
              This is a practice work for my college, we have to do a game, the objective was devolping in distincts layers, one for the logic, one for the data, and other for the design.
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
          <label>Encriptador de msj</label>
          <span />

          <div
            className={!isActiveJournal ? "project journal" : "project-active"}
            onClick={toggleClassJournal}
          >
            <p>
              This was created for my portfolio, the app is one of the common on the work of the developers. <br />  <br />
              Its simple page 
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
          <label>Traductor App</label>
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
          <label>Arg Programa Portofolio App</label>
          <span />

          <div
            className={!isActiveGiphy ? "project giphy" : "project-active"}
            onClick={toggleClassGiphy}
          >
           <p>
              This is the statal project "Argentina Programa", its a full stack app with Login (without register), developed with Angular, NodeJS, Typescript, Java for the backend.
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://github.com/manuacostaok/FrontEnd-YoProgramo"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://portfoliomanuacosta.web.app"
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
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
  const [isActiveLoger, setIsactiveLoger] = useState(false);
  const [isActiveChatbot, setIsactiveChatbot] = useState(false);

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

  const toggleClassLoger = () => {
    setIsactiveLoger(!isActiveLoger);
  };

  const toggleClassChatbot = () => {
    setIsactiveChatbot(!isActiveChatbot);
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
              href="https://github.com/manuacostaok/FueraLuces"
              target="_blank" rel="noreferrer"
            >
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/FueraLuces"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
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
              target="_blank" rel="noreferrer"
            >
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/AppClima"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
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
            <a href="https://github.com/manuacostaok/Programacion/tree/main/TP%20ultima%20v%20Programacio%202/TP%20ultima%20version02/Prueba%20del%20entorno" target="_blank" rel="noreferrer">
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/Programacion/tree/main/TP%20ultima%20v%20Programacio%202/TP%20ultima%20version02/Prueba%20del%20entorno"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
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
            <a href="https://appencriptador-e09a9.web.app" target="_blank" rel="noreferrer">
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/EncriptadorTexto"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
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
            <a href="https://apptraductor-9928e.web.app" target="_blank" rel="noreferrer">
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/Traductor"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
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
              href="https://portfoliomanuacosta.web.app"
              target="_blank" rel="noreferrer"
            >
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/FrontEnd-YoProgramo"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Loger App (Face Recognition)</label>
          <span />

          <div
            className={!isActiveGiphy ? "project loger" : "project-active"}
            onClick={toggleClassLoger}
          >
           <p>
           This is a university project to complete the Systems Technician program. It is an Android application that registers entries and exits to establishments using facial recognition.  (in the video you can see the demo)          </p>
          
          </div>

          <div className="visit-code">
            <a
              href="https://www.youtube.com/watch?v=-kkBO2pkZYM"
              target="_blank" rel="noreferrer"
            >
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/LogerFaceRecognition"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Fingerprint Reader Chat Bot</label>
          <span />

          <div
            className={!isActiveChatbot ? "project chatbot" : "project-active"}
            onClick={toggleClassChatbot}
          >
           <p>
           It's a help desk application, a web API service with a chatbot for services, which also includes a fingerprint reader.</p>
          </div>

          <div className="visit-code">
            <a
              href="https://github.com/manuacostaok/chatbot"
              target="_blank" rel="noreferrer"
            >
              <img src={visit}alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/chatbot"
              target="_blank" rel="noreferrer"
            >
              <img src={github}alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
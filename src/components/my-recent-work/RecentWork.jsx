// RecentWork.js
import "./recentwork.css";
import { useTranslation } from "react-i18next";
import visit from "./pictures/open.png";
import github from "./pictures/github.png";
import { useState } from "react";

export const RecentWork = () => {
  const { t } = useTranslation();

  const [isActiveInmo, setIsActiveInmo] = useState(false);
  const [isActiveConst, setIsActiveConst] = useState(false);
  const [isActiveJournal, setIsActiveJournal] = useState(false);
  const [isActiveHeros, setIsActiveHeros] = useState(false);
  const [isActiveGiphy, setIsActiveGiphy] = useState(false);
  const [isActiveNews, setIsActiveNews] = useState(false);
  const [isActiveLoger, setIsActiveLoger] = useState(false);
  const [isActiveChatbot, setIsActiveChatbot] = useState(false);

  const toggleClassInmo = () => {
    setIsActiveInmo(!isActiveInmo);
  };

  const toggleClassNews = () => {
    setIsActiveNews(!isActiveNews);
  };

  const toggleClassConst = () => {
    setIsActiveConst(!isActiveConst);
  };

  const toggleClassJournal = () => {
    setIsActiveJournal(!isActiveJournal);
  };

  const toggleClassHeros = () => {
    setIsActiveHeros(!isActiveHeros);
  };

  const toggleClassGiphy = () => {
    setIsActiveGiphy(!isActiveGiphy);
  };

  const toggleClassLoger = () => {
    setIsActiveLoger(!isActiveLoger);
  };

  const toggleClassChatbot = () => {
    setIsActiveChatbot(!isActiveChatbot);
  };

  return (
    <section className="projects-section">
      <div className="projects-text-div">
        <h2>{t('projects.title')}</h2>
        <p>{t('projects.description')}</p>
        <label className="click-to">
          {t('projects.clickToSee')}
        </label>
      </div>
      <div className="projects">
      <div className="project-div">
          <label>{t('projects.project6')}</label>
          <span />

          <div
            className={!isActiveGiphy ? "project giphy" : "project-active"}
            onClick={toggleClassGiphy}
          >
            <p>
              {t('projects.project6Description')}
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://portfoliomanuacosta.web.app"
              target="_blank" rel="noreferrer"
            >
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/FrontEnd-YoProgramo"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project7')}</label>
          <span />

          <div
            className={!isActiveLoger ? "project loger" : "project-active"}
            onClick={toggleClassLoger}
          >
            <p>
              {t('projects.project7Description')}
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://www.youtube.com/watch?v=-kkBO2pkZYM"
              target="_blank" rel="noreferrer"
            >
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/LogerFaceRecognition"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project8')}</label>
          <span />

          <div
            className={!isActiveChatbot ? "project chatbot" : "project-active"}
            onClick={toggleClassChatbot}
          >
            <p>
              {t('projects.project8Description')}
            </p>
          </div>

          <div className="visit-code">
            <a
              href="https://github.com/manuacostaok/chatbot"
              target="_blank" rel="noreferrer"
            >
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/chatbot"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project1')}</label>
          <span />
          <div
            className={!isActiveInmo ? "project inmobiliaria" : "project-active"}
            onClick={toggleClassInmo}
          >
            <p>
              {t('projects.project1Description')}
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
          <label>{t('projects.project2')}</label>
          <span />

          <div
            className={!isActiveConst ? "project senderos" : "project-active"}
            onClick={toggleClassConst}
          >
            <p>
              {t('projects.project2Description')}
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
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project3')}</label>
          <span />
          <div
            className={!isActiveNews ? "project news" : "project-active"}
            onClick={toggleClassNews}
          >
            <p>
              {t('projects.project3Description')}
            </p>
          </div>

          <div className="visit-code">
            <a href="https://github.com/manuacostaok/Programacion/tree/main/TP%20ultima%20v%20Programacio%202/TP%20ultima%20version02/Prueba%20del%20entorno" target="_blank" rel="noreferrer">
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/Programacion/tree/main/TP%20ultima%20v%20Programacio%202/TP%20ultima%20version02/Prueba%20del%20entorno"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project4')}</label>
          <span />

          <div
            className={!isActiveJournal ? "project journal" : "project-active"}
            onClick={toggleClassJournal}
          >
            <p>
              {t('projects.project4Description')}
            </p>
          </div>

          <div className="visit-code">
            <a href="https://appencriptador-e09a9.web.app" target="_blank" rel="noreferrer">
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/EncriptadorTexto"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>{t('projects.project5')}</label>
          <span />

          <div
            className={!isActiveHeros ? "project heros" : "project-active"}
            onClick={toggleClassHeros}
          >
            <p>
              {t('projects.project5Description')}
            </p>
          </div>

          <div className="visit-code">
            <a href="https://apptraductor-9928e.web.app" target="_blank" rel="noreferrer">
              <img src={visit} alt="" />
            </a>
            <a
              href="https://github.com/manuacostaok/Traductor"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

// components/about-me-skills/AboutMeSkills.js
import React from 'react';
import './about-me-skills.css';
import html from '../pictures/skills/html.png';
import css from '../pictures/skills/css.png';
import javascript from '../pictures/skills/javascript.png';
import reactjs from '../pictures/skills/reactjs.png';
import angular from '../pictures/skills/angular.png';
import ruby from '../pictures/skills/ruby.png';
import phpmysql from '../pictures/skills/phpmysql.png';
import psql from '../pictures/skills/psql.png';
import git from '../pictures/skills/git.png';
import firebase from '../pictures/skills/firebase.png';
import npm from '../pictures/skills/npm.png';
import java from '../pictures/skills/java.png';
import mongodb from '../pictures/skills/mongodb.png';
import curriculum from './cv24.pdf';
import { useTranslation } from 'react-i18next';


export const AboutMeSkills = () => {
  const { t } = useTranslation();

  return (
    <section className="purple-background">
      <div className="about-me">
        <h2>{t('aboutMe.title')}</h2>
        <p>{t('aboutMe.description')}</p>
      </div>
      <div className="skills">
        <h2>{t('skills.title')}</h2>
        <div className="skills-pictures-div">
          <div className="skill-div">
            <img src={html} alt="HTML" />
            <label>{t('skills.html')}</label>
          </div>
          <div className="skill-div">
            <img src={css} alt="CSS" />
            <label>{t('skills.css')}</label>
          </div>
          <div className="skill-div">
            <img src={javascript} alt="JavaScript" />
            <label>{t('skills.javascript')}</label>
          </div>
          <div className="skill-div">
            <img src={angular} alt="Angular" />
            <label>{t('skills.angular')}</label>
          </div>
          <div className="skill-div">
            <img src={java} alt="Java" />
            <label>{t('skills.java')}</label>
          </div>
          <div className="skill-div">
            <img src={reactjs} alt="React JS" />
            <label>{t('skills.reactjs')}</label>
          </div>
          <div className="skill-div">
            <img src={git} alt="Git" />
            <label>{t('skills.git')}</label>
          </div>
          <div className="skill-div">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin" />
            <label>{t('skills.kotlin')}</label>
          </div>
          <div className="skill-div">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
            <label>{t('skills.python')}</label>
          </div>
          <div className="skill-div">
            <img src={firebase} alt="Firebase" />
            <label>{t('skills.firebase')}</label>
          </div>
          <div className="skill-div">
            <img src={npm} alt="Npm" />
            <label>{t('skills.npm')}</label>
          </div>
          <div className="skill-div">
            <img src={psql} alt="PSQL" />
            <label>{t('skills.psql')}</label>
          </div>
          <div className="skill-div">
            <img src={mongodb} alt="mongodb" />
            <label>{t('skills.mongodb')}</label>
          </div>
          <div className="skill-div">
            <img src={ruby} alt="Ruby" />
            <label>{t('Ruby')}</label>
          </div>
          <div className="skill-div">
            <img src={phpmysql} alt="Npm" />
            <label>{t('skills.phpmysql')}</label>
          </div>

        </div>
      </div>
      <a className="download-cv" target="_blank" rel="noopener noreferrer" href={curriculum}>
        {t('aboutMe.downloadCV')}
      </a>
    </section>
  );
};

import "./socials.css";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";
import { useTranslation } from "react-i18next";

export const Socials = () => {
  const { t } = useTranslation();

  return (
    <section className="socials-section">
      <div className="socials-text-section">
        <h2>{t('socials.title')}</h2>
        <p>{t('socials.description')}</p>
      </div>
      <div className="social-buttons">
       
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/manuel-acosta-a1a238214/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-img linkedin" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          className="social-btn"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/manuacostaok?tab=repositories"
        >
          <img className="social-img github" src={github} alt="GitHub" />
        </a>
        
      </div>
    </section>
  );
};

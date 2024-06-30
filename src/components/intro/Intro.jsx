// Intro.js
import "./intro.css";
import wave from "../pictures/waving.png";
import devices from "../pictures/devices.png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../switch-language/LanguageSwitcher";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="intro">
      <div className="intro-text-div">
        <div className="intro-title-div">
          <h1>{t('intro.title')}</h1>
          <img src={wave} />
        </div>
        
        <p>{t('intro.description')}</p>
        <LanguageSwitcher />
      </div>
      <div className="intro-img-div">
        <img src={devices} className="computers" alt="Devices" />
      </div>
    </section>
  );
};

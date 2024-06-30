import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Archivo de estilos personalizados
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={i18n.language === 'es'}
          onChange={() => {
            if (i18n.language === 'en') {
              changeLanguage('es');
            } else {
              changeLanguage('en');
            }
          }}
          id="languageSwitch"
        />
        <label className="form-check-label" htmlFor="languageSwitch">
          {i18n.language === 'en' ? 'EN' : 'ES'}
        </label>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

import { useState } from "react";
import swal from "sweetalert";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_3vxmpzu",
        "template_e2sdqnr",
        e.target,
        "nyYBn4MtO8T9aj2Uz"
      )
      .then((res) => {
        swal({
          text: t('contact.successMessage'),
          icon: "success",
        });
        setLoading(false);
      })
      .catch((err) =>
        swal({
          text: t('contact.errorMessage'),
          icon: "warning",
          timer: "2000",
        })
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="socials-text-section">
        <h2>{t('contact.description')}</h2>
        <p>{t('contact.description2')}</p>
      </div>
      <div className="contact-div">
        <h2>{t('contact.title')}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-div">
            <label>{t('contact.nameLabel')}</label>
            <input type="text" autoComplete="none" name="name" />
          </div>
          <div className="input-div">
            <label>{t('contact.emailLabel')}</label>
            <input type="email" autoComplete="off" name="email" />
          </div>
          <div className="input-div">
            <label>{t('contact.messageLabel')}</label>
            <textarea name="message" />
          </div>
          <button type="submit" disabled={loading}>
            {t('contact.submitButton')}
          </button>
        </form>
      </div>

      <a href="#top">{t('contact.backToTop')}</a>
    </section>
  );
};

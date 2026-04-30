import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact-page.css";

export const ContactPage = ({ lang = "en" }) => {
  const t = {
    en: {
      title: "Let’s build something together",
      subtitle:
        "I’m open to freelance work, collaborations or full-time roles. Send me a message and I’ll reply as soon as possible. Check out my git repo!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message Sent",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email",
      messageRequired: "Message is required",
      messageShort: "Message too short"
    },
    es: {
      title: "Construyamos algo juntos",
      subtitle:
        "Estoy abierto a trabajos freelance, colaboraciones o roles full-time. Envíame un mensaje y te respondo lo antes posible. Mira mi repositorio de github",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado",
      nameRequired: "El nombre es obligatorio",
      emailRequired: "El email es obligatorio",
      emailInvalid: "Email inválido",
      messageRequired: "El mensaje es obligatorio",
      messageShort: "El mensaje es muy corto"
    }
  }[lang];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 🔊 sonido
  const playSuccessSound = () => {
    const audio = new Audio("/success.mp3");
    audio.volume = 0.25;
    audio.play().catch(() => {});
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};

    if (!form.from_name.trim()) {
      newErrors.from_name = t.nameRequired;
    }

    if (!form.from_email.trim()) {
      newErrors.from_email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      newErrors.from_email = t.emailInvalid;
    }

    if (!form.message.trim()) {
      newErrors.message = t.messageRequired;
    } else if (form.message.length < 10) {
      newErrors.message = t.messageShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // CHANGE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        "service_qqpsb33",
        "template_e2sdqnr",
        form,
        "nyYBn4MtO8T9aj2Uz"
      )
      .then(() => {
        playSuccessSound();
        setSuccess(true);

        setForm({
          from_name: "",
          from_email: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 2500);
      })
      .catch((err) => {
        console.error("EMAIL ERROR:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-info">

          <h2>{t.title}</h2>

          <p>{t.subtitle}</p>

          <div className="contact-socials">

            <a
              href="https://github.com/manuacostaok"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/acostamanueldev/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

        {/* FORM */}
        <div className="form-wrapper">

          {success && (
            <div className="success-overlay">
              <div className="success-box">
                <div className="checkmark" />
                <p>{t.success}</p>
              </div>
            </div>
          )}

          <form
            className={`contact-form ${success ? "fade-out" : ""}`}
            onSubmit={handleSubmit}
          >

            <div className="input-group">
              <label>{t.name}</label>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
              />
              {errors.from_name && (
                <span className="error">{errors.from_name}</span>
              )}
            </div>

            <div className="input-group">
              <label>{t.email}</label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
              />
              {errors.from_email && (
                <span className="error">{errors.from_email}</span>
              )}
            </div>

            <div className="input-group">
              <label>{t.message}</label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`submit-btn ${loading ? "loading" : ""}`}
            >
              {loading ? t.sending : t.send}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};
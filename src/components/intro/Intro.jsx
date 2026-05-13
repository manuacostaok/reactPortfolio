import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiDownload } from "react-icons/fi";
import { HeroLogo3D } from "./HeroLogo3D.jsx";

export const Intro = ({ lang = "en" }) => {

  const messages = lang === "en"
    ? [
      
        "Hi, I’m Manuel Acosta 👋",
        "Full Stack Developer 💻",
        "I build web systems for businesses 🚀",
        "Booking, management & automation ⚙️"
      ]
    : [
      
        "Hola, soy Manuel Acosta 👋",
        "Desarrollador Full Stack 💻",
        "Creo sistemas web para negocios 🚀",
        "Turnos, gestión y automatización ⚙️"
      ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
  const current = messages[index] || "";

  const timeout = setTimeout(() => {

    // ESCRIBIENDO
    if (!deleting) {
      setText(current.substring(0, subIndex + 1));
      setSubIndex((prev) => prev + 1);

      // cuando termina de escribir → empieza a borrar
      if (subIndex === current.length) {
        setDeleting(true);
      }
    }

    // BORRANDO
    else {
      setText(current.substring(0, subIndex - 1));
      setSubIndex((prev) => prev - 1);

      // cuando termina de borrar → siguiente frase
      if (subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length); // 🔥 LOOP INFINITO
      }
    }

  }, deleting ? 40 : 80);

  return () => clearTimeout(timeout);

}, [subIndex, deleting, index, messages]);

  return (
    <section className="hero">

      <motion.div className="hero-center">

        {/* LEFT */}
        <div className="hero-left">

          <p className="badge">
            {lang === "en" ? "Available for freelance or full-timework" : "Disponible para trabajo freelance o full-time"}
          </p>

          <h1>
            {text}
            <span className="cursor">|</span>
          </h1>

          <p className="subtitle">
            {lang === "en"
              ? "I develop real-world applications such as scheduling systems, customer management, and process automation."
              : "Desarrollo aplicaciones reales como sistemas de turnos, gestión de clientes y automatización de procesos."
            }
          </p>

          <div className="hero-buttons">

            <a
              href="https://github.com/manuacostaok?tab=repositories"
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              {lang === "en" ? "View Projects" : "Ver proyectos"}
            </a>

            <a
              href={lang === "en" ? "/cv_Manuel_Dev_En_2026.pdf" : "/cv_Manuel_Dev_ES_2026.pdf"}
              download
              className="secondary-btn"
            >
              <FiDownload />
              {lang === "en" ? "Download CV" : "Descargar CV"}
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <HeroLogo3D />
        </div>

      </motion.div>

    </section>
  );
};
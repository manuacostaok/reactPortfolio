import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiDownload } from "react-icons/fi";
import { HeroLogo3D } from "./HeroLogo3D.jsx";

export const Intro = ({ lang = "en" }) => {

  const messages = lang === "en"
    ? [
        "Hi, I’m Manuel Acosta 👋",
        "Full Stack Developer",
        "Building Web, Mobile & AI Systems",
        "From idea to production"
      ]
    : [
        "Hola, soy Manuel Acosta 👋",
        "Desarrollador Full Stack",
        "Web · Mobile · Inteligencia Artificial",,
        "Transformando ideas en software funcional"
      ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = messages[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, lang]);

  return (
    <section className="hero">

      <motion.div className="hero-center">

        {/* LEFT */}
        <div className="hero-left">

          <p className="badge">
            {lang === "en" ? "Available for work" : "Disponible para trabajar"}
          </p>

          <h1>
            {text}
            <span className="cursor">|</span>
          </h1>

          <p className="subtitle">
            {lang === "en"
              ? "Building scalable applications across web, mobile and AI systems."
              : "Construyendo aplicaciones escalables web, mobile y sistemas de IA."
            }
          </p>

          <div className="hero-buttons">
{/* BOTON VER  REPO 
            <a
              href="https://github.com/manuacostaok?tab=repositories"
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              {lang === "en" ? "View Projects" : "Ver proyectos"}
            </a>
*/}
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
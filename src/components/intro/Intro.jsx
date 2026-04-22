import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiDownload } from "react-icons/fi";
import { HeroLogo3D } from "./HeroLogo3D.jsx";

export const Intro = () => {
  console.log("INTRO RENDER");

  const messages = [
    "Hi, I’m Manuel Acosta 👋",
    "Full Stack Developer",
    "I build fast, scalable web apps",
    "Contact me!!!"
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

        if (subIndex === current.length) {
          setDeleting(true);
        }
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
  }, [subIndex, deleting, index]);

  return (
    <section className="hero">

      <motion.div
        className="hero-center"
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* LEFT SIDE */}
        <div className="hero-left">

          <p className="badge">Available for work</p>

          <h1>
            {text}
            <span className="cursor">|</span>
          </h1>

          <p className="subtitle">
            I build scalable web applications.
          </p>

          <div className="hero-buttons">

            <a
              href="https://github.com/manuacostaok?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              <FiGithub size={16} />
              View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="secondary-btn"
            >
              <FiDownload size={16} />
              Download CV
            </a>

          </div>

        </div>

        {/* RIGHT SIDE (LOGO 3D) */}
        <div className="hero-right">
  <HeroLogo3D />
</div>

      </motion.div>

    </section>
  );
};
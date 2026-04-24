import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { FiGlobe } from "react-icons/fi";

export const Navbar = ({
  theme,
  lang = "en",
  toggleLang
}) => {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const logoRef = useRef(null);

  const t = {
    en: {
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    },
    es: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto"
    }
  }[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "projects", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoMove = (e) => {
    const el = logoRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 10) * -1;
    const rotateY = (x - centerX) / 10;

    el.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.08)
    `;
  };

  const resetLogo = () => {
    const el = logoRef.current;
    if (!el) return;

    el.style.transform = `
      perspective(600px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "shrink" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >

      {/* LOGO */}
      <a
        href="#home"
        ref={logoRef}
        className="logo"
        onMouseMove={handleLogoMove}
        onMouseLeave={resetLogo}
      >
        MA
      </a>

      {/* LINKS */}
      <div className="nav-links">

        <a className={active === "home" ? "active" : ""} href="#home">
          {t.home}
        </a>

        <a className={active === "projects" ? "active" : ""} href="#projects">
          {t.projects}
        </a>

        <a className={active === "contact" ? "active" : ""} href="#contact">
          {t.contact}
        </a>

      </div>

      {/* ACTIONS */}
      <div className="nav-actions">

        <button
          className={`lang-toggle ${lang}`}
          onClick={toggleLang}
        >
          <FiGlobe size={14} />
          <span>{lang === "en" ? "EN" : "ES"}</span>
          <div className="lang-slider" />
        </button>

      </div>

    </motion.nav>
  );
};
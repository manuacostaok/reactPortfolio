import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";

export const Navbar = ({
  toggleTheme,
  theme,
  lang = "en",
  toggleLang
}) => {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const logoRef = useRef(null);

  // =========================
  // TRANSLATIONS
  // =========================
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

  // =========================
  // SCROLL ACTIVE SECTION
  // =========================
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

  // =========================
  // 3D LOGO EFFECT
  // =========================
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
      transition={{ duration: 0.5 }}
    >

      {/* LOGO */}
      <div
        ref={logoRef}
        className="logo glow"
        onMouseMove={handleLogoMove}
        onMouseLeave={resetLogo}
      >
        MA
      </div>

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

        {/* LANGUAGE BUTTON (Apple style) */}
        <button
          className={`lang-toggle ${lang === "en" ? "en" : "es"}`}
          onClick={toggleLang}
        >
          <FiGlobe size={14} />
          <span className="lang-text">
            {lang === "en" ? "ES" : "EN"}
          </span>
          <span className="lang-indicator" />
        </button>

        {/* THEME */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

      </div>

    </motion.nav>
  );
};
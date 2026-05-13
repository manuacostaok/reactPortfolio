import "./about-me-skills.css";
import { useMemo } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaAndroid,
  FaBrain
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiAngular,
  SiJira,
  SiPostman,
  SiVercel,
  SiRender,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn
} from "react-icons/si";

export const AboutMeSkills = ({ lang = "en" }) => {

  const text = useMemo(() => ({
    en: {
      title: "About me",
      tech: "Technologies",

      p1: "Fullstack developer focused on building real-world applications for businesses.",

      p2: "I develop complete systems such as booking platforms, REST APIs with authentication, and admin dashboards that solve real operational problems.",

      p3: "My goal is to create practical, reliable and production-ready solutions that improve organization and save time.",

      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile (basic)",
        ai: "Other",
        tools: "Tools"
      }
    },

    es: {
      title: "Sobre mí",
      tech: "Tecnologías",

      p1: "Desarrollador Fullstack enfocado en crear aplicaciones reales para negocios.",

      p2: "Desarrollo sistemas completos como plataformas de turnos, APIs con autenticación y paneles de administración que resuelven problemas reales de organización.",

      p3: "Mi objetivo es construir soluciones prácticas, confiables y listas para producción que ahorren tiempo y mejoren la gestión.",

      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile (básico)",
        ai: "Otros",
        tools: "Herramientas"
      }
    }
  }), []);

  const t = text[lang] || text.en;

  const skills = [
    {
      key: "frontend",
      items: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
      ],
    },
    {
      key: "backend",
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      key: "tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiRender />, name: "Render" },
      ],
    },
    {
      key: "mobile",
      items: [
        { icon: <FaAndroid />, name: "Android" },
        { icon: <FaJava />, name: "Java / Kotlin" },
      ],
    },
    {
      key: "ai",
      items: [
        { icon: <FaBrain />, name: "Basic AI / ML" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
      ],
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* ABOUT */}
      <div className="about hero-about">

        <h2>{t.title}</h2>

        <p className="about-highlight">
          {lang === "en"
            ? "Specialized in booking systems and business management applications"
            : "Especializado en sistemas de turnos y gestión de negocios"}
        </p>

        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>

      </div>

      {/* TECHNOLOGIES */}
      <div className="skills">

        <h2>{t.tech}</h2>

        {skills.map((group, i) => (
          <div key={i} className="skill-group">

            <h3 className="skill-title">
              {t.groups[group.key]}
            </h3>

            <div className="skills-grid">
              {group.items.map((skill, j) => (
                <div className="skill-card" key={j}>
                  <div className="icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};
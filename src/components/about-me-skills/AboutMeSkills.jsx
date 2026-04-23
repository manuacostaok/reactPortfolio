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

      p1: "Full Stack Developer building scalable applications across web, mobile and AI systems.",
      p2: "Experience delivering real-world projects including REST APIs, authentication systems, Android apps and AI-based solutions using computer vision and natural language processing.",
      p3: "Focused on transforming complex ideas into efficient, user-ready products with clean and maintainable code.",

      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ai: "AI / Machine Learning",
        tools: "Tools & DevOps"
      }
    },

    es: {
      title: "Sobre mí",
      tech: "Tecnologías",

      p1: "Desarrollador Full Stack enfocado en la creación de aplicaciones escalables para web, mobile e inteligencia artificial.",
      p2: "Experiencia en el desarrollo de proyectos reales que incluyen APIs REST, sistemas de autenticación, aplicaciones Android y soluciones de IA basadas en visión por computadora y procesamiento de lenguaje natural.",
      p3: "Enfocado en transformar ideas complejas en productos eficientes, orientados a usuarios, con código limpio, mantenible y buenas prácticas de desarrollo.",

      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ai: "IA / Machine Learning",
        tools: "Herramientas & DevOps"
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
        { icon: <SiAngular />, name: "Angular" },
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
      key: "mobile",
      items: [
        { icon: <FaAndroid />, name: "Android" },
        { icon: <FaJava />, name: "Java / Kotlin" },
      ],
    },
    {
      key: "ai",
      items: [
        { icon: <FaBrain />, name: "NLP" },
        { icon: <SiTensorflow />, name: "TensorFlow Lite" },
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
      ],
    },
    {
      key: "tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiJira />, name: "Jira" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiRender />, name: "Render" },
      ],
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* ABOUT */}
      <div className="about hero-about">

        <h2>{t.title}</h2>

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
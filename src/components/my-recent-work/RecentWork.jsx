import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
  FaBrain,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaHtml5,
  FaJs,
  FaBootstrap
} from "react-icons/fa";

import {
  SiExpress,
  SiOpencv,
  SiTensorflow,
  SiDjango,
  SiScikitlearn
} from "react-icons/si";

export const RecentWork = ({ lang = "en" }) => {
  const t = {
    en: {
      title: "Featured Projects",
      taskTitle: "Task Manager App",
      taskDesc:
        "Full stack application for task management with authentication, CRUD operations and persistent database.",
      loggerTitle: "Logger Face Recognition System",
      loggerDesc:
          "Biometric system for tracking entries and exits in a facility, with Android capture, backend API, and machine learning-based verification.",
      chatbotTitle: "AI Customer Support Chatbot",
      chatbotDesc:
          "Intelligent customer support chatbot using NLP and machine learning techniques for intent detection. Includes fingerprint authentication.",
      otherTitle: "Barber Appointments",
      otherDesc:
        "Business shift management system, shift manager, employee and service management. With login..",
      viewProject: "View Project",
      viewDemo: "View Demo",
      viewMore: "View More"
    },

    es: {
      title: "Proyectos Destacados",
      taskTitle: "Gestor de Tareas",
      taskDesc:
        "Aplicación full stack para gestión de tareas con autenticación, CRUD y base de datos persistente.",
      loggerTitle: "Sistema de Reconocimiento Facial",
      loggerDesc:
        "Sistema biométrico de registro de ingresos y egresos de un lugar, con con captura Android, API backend y verificación con machine learning.",
      chatbotTitle: "Chatbot de Soporte con IA",
      chatbotDesc:
        "Chatbot inteligente para soporte usando NLP y técnicas de ML para detección de intenciones. Con lector de huella digital",
      otherTitle: "Turnos Barberia",
      otherDesc:
        "Sistema de turnos para negocio, administrador de turnos, empleados y servicios. Con Login.",
      viewProject: "Ver Proyecto",
      viewDemo: "Ver Demo",
      viewMore: "Ver Más"
    }
  }[lang];

  return (
    <section id="projects">
      <h2>{t.title}</h2>

      <div className="projects-grid">

        {/* TASK MANAGER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>{t.taskTitle}</h3>

            <p>{t.taskDesc}</p>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaNodeJs /> Node</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
            </div>

          </div>

          <div className="project-footer">
            <a className="primary-btn"               href="https://task-manager-acosta.vercel.app/"
             target="_blank" rel="noreferrer">
              {t.viewProject}
            </a>
          </div>
        </motion.div>

        {/* LOGGER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>{t.loggerTitle}</h3>

            <p>{t.loggerDesc}</p>

            <div className="tech-row">
              <span className="tech-pill"><FaAndroid /> Android</span>
              <span className="tech-pill"><FaJava /> Java</span>
              <span className="tech-pill">Kotlin</span>
              <span className="tech-pill"><FaReact /> React</span>

              <span className="tech-pill"><FaNodeJs /> Node.js</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>

              <span className="tech-pill"><SiOpencv /> OpenCV</span>
              <span className="tech-pill"><SiTensorflow /> TensorFlow Lite</span>
            </div>

          </div>

          <div className="project-footer">
            <a className="primary-btn" target="_blank"  href="https://www.youtube.com/watch?v=-kkBO2pkZYM" rel="noreferrer">
              {t.viewDemo}
            </a>
          </div>
        </motion.div>

        {/* CHATBOT */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>{t.chatbotTitle}</h3>

            <p>{t.chatbotDesc}</p>

            <div className="tech-row">
              <span className="tech-pill"><FaPython /> Python</span>
              <span className="tech-pill"><SiDjango /> Django</span>
              <span className="tech-pill"><FaBrain /> NLTK</span>
              <span className="tech-pill"><SiScikitlearn /> Scikit-learn</span>

              <span className="tech-pill">SVM</span>
              <span className="tech-pill">PCA</span>

              <span className="tech-pill"><FaBootstrap /> Bootstrap</span>
              <span className="tech-pill"><FaJs /> JavaScript</span>
              <span className="tech-pill"><FaHtml5 /> HTML</span>
            </div>

          </div>

          <div className="project-footer">
            <a className="primary-btn"
            href="https://github.com/manuacostaok/chatbot"
             target="_blank" rel="noreferrer">
              {t.viewProject}
            </a>
          </div>
        </motion.div>

        {/* OTHER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>{t.otherTitle}</h3>

            <p>{t.otherDesc}</p>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaJs /> JavaScript</span>
              <span className="tech-pill"><FaHtml5 /> HTML</span>
              <span className="tech-pill"><FaCss3Alt /> CSS</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
              <span className="tech-pill"><FaNodeJs /> Node.js</span>
              <span className="tech-pill"><FaJava /> Java</span>

            </div>

          </div>

          <div className="project-footer">
            <a
              href="https://turnosahora.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="violet-btn"
            >
              {t.viewMore}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
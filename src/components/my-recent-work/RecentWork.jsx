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

      barberTitle: "Barbershop Booking System",
      barberDesc:
        "Full web application for managing appointments, users and schedules with authentication and admin panel.",

      taskTitle: "Task Management System",
      taskDesc:
        "Web application to manage tasks with authentication and persistent database.",

      loggerTitle: "Face Recognition Logger",
      loggerDesc:
        "Biometric system to track entries and exits using Android and machine learning.",

      chatbotTitle: "AI Customer Support Chatbot",
      chatbotDesc:
        "AI-based chatbot with intent detection and automated responses.",

      viewProject: "View Project",
      viewDemo: "View Demo",
      code: "Code"
    },

    es: {
      title: "Proyectos Destacados",

      barberTitle: "Sistema de Turnos para Barberías",
      barberDesc:
        "Aplicación web para gestionar turnos, usuarios y horarios con autenticación y panel de administración.",

      taskTitle: "Sistema de Gestión de Tareas",
      taskDesc:
        "Aplicación web para gestionar tareas con autenticación y base de datos persistente.",

      loggerTitle: "Sistema de Reconocimiento Facial",
      loggerDesc:
        "Sistema biométrico para registrar ingresos y egresos con Android y machine learning.",

      chatbotTitle: "Chatbot de Soporte con IA",
      chatbotDesc:
        "Chatbot basado en IA con detección de intenciones y respuestas automáticas.",

      viewProject: "Ver Proyecto",
      viewDemo: "Ver Demo",
      code: "Código"
    }
  }[lang];

  return (
    <section id="projects">
      <h2>{t.title}</h2>

      <div className="projects-grid">

        {/* 🔥 BARBER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">
            <h3>{t.barberTitle}</h3>
            <p>{t.barberDesc}</p>

            <ul className="project-benefits">
              {lang === "en" ? (
                <>
                  <li>✔ Reduces manual booking</li>
                  <li>✔ Saves time in daily operations</li>
                  <li>✔ Improves business organization</li>
                </>
              ) : (
                <>
                  <li>✔ Reduce la gestión manual</li>
                  <li>✔ Ahorra tiempo en la operación</li>
                  <li>✔ Mejora la organización</li>
                </>
              )}
            </ul>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaNodeJs /> Node.js</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
            </div>
          </div>

          <div className="project-footer">
            <a href="https://turnosahora.vercel.app/" target="_blank" rel="noreferrer" className="primary-btn">
              {t.viewDemo}
            </a>
            <a href="https://github.com/manuacostaok/barbershop-booking" target="_blank" rel="noreferrer" className="secondary-btn">
              {t.code}
            </a>
          </div>
        </motion.div>

        {/* TASK */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">
            <h3>{t.taskTitle}</h3>
            <p>{t.taskDesc}</p>

            <ul className="project-benefits">
              {lang === "en" ? (
                <>
                  <li>✔ Organizes tasks efficiently</li>
                  <li>✔ Secure user authentication</li>
                  <li>✔ Persistent data storage</li>
                </>
              ) : (
                <>
                  <li>✔ Organiza tareas eficientemente</li>
                  <li>✔ Autenticación segura</li>
                  <li>✔ Datos persistentes</li>
                </>
              )}
            </ul>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaNodeJs /> Node</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
            </div>
          </div>

          <div className="project-footer">
            <a href="https://task-manager-acosta.vercel.app/" target="_blank" rel="noreferrer" className="primary-btn">
              {t.viewDemo}
            </a>
            <a href="https://github.com/manuacostaok/task-manager-api" target="_blank" rel="noreferrer" className="secondary-btn">
              {t.code}
            </a>
          </div>
        </motion.div>

        {/* LOGGER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">
            <h3>{t.loggerTitle}</h3>
            <p>{t.loggerDesc}</p>

            <ul className="project-benefits">
              {lang === "en" ? (
                <>
                  <li>✔ Automates entry tracking</li>
                  <li>✔ Biometric verification</li>
                  <li>✔ Reduces manual errors</li>
                </>
              ) : (
                <>
                  <li>✔ Automatiza registros</li>
                  <li>✔ Verificación biométrica</li>
                  <li>✔ Reduce errores manuales</li>
                </>
              )}
            </ul>

            <div className="tech-row">
              <span className="tech-pill"><FaAndroid /> Android</span>
              <span className="tech-pill"><FaJava /> Java</span>
              <span className="tech-pill"><FaNodeJs /> Node</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
            </div>
          </div>

          <div className="project-footer">
            <a href="https://www.youtube.com/watch?v=-kkBO2pkZYM" target="_blank" rel="noreferrer" className="primary-btn">
              {t.viewDemo}
            </a>
            <a href="https://github.com/manuacostaok/LogerFaceRecognition" target="_blank" rel="noreferrer" className="secondary-btn">
              {t.code}
            </a>
          </div>
        </motion.div>

        {/* CHATBOT */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">
            <h3>{t.chatbotTitle}</h3>
            <p>{t.chatbotDesc}</p>

            <ul className="project-benefits">
              {lang === "en" ? (
                <>
                  <li>✔ Automates customer support</li>
                  <li>✔ Detects user intent</li>
                  <li>✔ Reduces response time</li>
                </>
              ) : (
                <>
                  <li>✔ Automatiza soporte al cliente</li>
                  <li>✔ Detecta intenciones</li>
                  <li>✔ Reduce tiempos de respuesta</li>
                </>
              )}
            </ul>

            <div className="tech-row">
              <span className="tech-pill"><FaPython /> Python</span>
              <span className="tech-pill"><SiDjango /> Django</span>
              <span className="tech-pill"><FaBrain /> AI</span>
            </div>
          </div>

          <div className="project-footer">
            <a href="https://github.com/manuacostaok/chatbot" target="_blank" rel="noreferrer" className="secondary-btn">
              {t.code}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
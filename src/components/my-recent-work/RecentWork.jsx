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

export const RecentWork = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {/* TASK MANAGER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>Task Manager App</h3>

            <p>
              Full stack application for task management with authentication,
              CRUD operations and persistent database.
            </p>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaNodeJs /> Node</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> MongoDB</span>
            </div>

          </div>

          <div className="project-footer">
            <a
              href="https://task-manager-acosta.vercel.app"
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </motion.div>

        {/* LOGGER */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>Logger Face Recognition System</h3>

            <p>
              Biometric attendance system combining Android mobile capture,
              backend API services and machine learning-based face verification.
            </p>

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
            <a
              href="https://www.youtube.com/watch?v=-kkBO2pkZYM"
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        </motion.div>

        {/* CHATBOT */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>AI Customer Support Chatbot</h3>

            <p>
              Intelligent chatbot for telecom support using NLP and ML.
              Intent detection, cosine similarity and feedback learning.
            </p>

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
            <a
              href="https://github.com/manuacostaok/chatbot"
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </motion.div>

        {/* OTHER PROJECTS */}
        <motion.div className="card project" whileHover={{ scale: 1.02 }}>
          <div className="project-content">

            <h3>Other Projects</h3>

            <p>
              Academic systems, backend APIs, Java apps and frontend experiments
              including machine learning prototypes.
            </p>

            <div className="tech-row">
              <span className="tech-pill"><FaReact /> React</span>
              <span className="tech-pill"><FaJs /> JavaScript</span>
              <span className="tech-pill"><FaHtml5 /> HTML</span>
              <span className="tech-pill"><FaCss3Alt /> CSS</span>

              <span className="tech-pill"><SiDjango /> Django</span>
              <span className="tech-pill"><FaNodeJs /> Node.js</span>
              <span className="tech-pill"><SiExpress /> Express</span>
              <span className="tech-pill"><FaDatabase /> SQL</span>
              <span className="tech-pill"><FaJava /> Java</span>

              <span className="tech-pill"><FaBrain /> NLP / ML</span>
              <span className="tech-pill"><SiScikitlearn /> Scikit-learn</span>
            </div>

          </div>

          <div className="project-footer">
            <a
              href="https://github.com/manuacostaok?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="violet-btn"
            >
              View More
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
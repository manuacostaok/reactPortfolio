import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
  FaJava
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript, SiOpencv, SiTensorflow
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

  <h3>Logger Face Recognition</h3>

  <p>
    Full-stack attendance system using facial recognition for real-world environments.
    Android mobile app integrated with backend API and AI-based image processing pipeline.
  </p>

  {/* =========================
      FRONTEND / MOBILE
  ========================= */}
  <div className="tech-row">

    <span className="tech-pill">
      <FaAndroid /> Kotlin
    </span>

    <span className="tech-pill">
      <FaJava /> Java
    </span>

  
                  <span className="tech-pill"><FaDatabase /> MongoDB</span>

    <span className="tech-pill">
      <FaNodeJs /> Node.js
    </span>

    <span className="tech-pill">
      <SiExpress /> Express
    </span>


    <span className="tech-pill">
      <SiOpencv /> OpenCV
    </span>

    <span className="tech-pill">
      <SiTensorflow /> TensorFlow Lite
    </span>

  </div>

</div>

<div className="project-footer">
  <a
    href="https://github.com/manuacostaok/LogerFaceRecognition"
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
      Additional projects including backend APIs, authentication systems,
      Java applications and frontend experiments.
    </p>

    {/* TECH */}
    <div className="tech-row">

      <span className="tech-pill"><FaReact /> React</span>
      <span className="tech-pill"><FaNodeJs /> Node</span>
      <span className="tech-pill"><SiExpress /> Express</span>
      <span className="tech-pill"><FaDatabase /> MongoDB</span>
      <span className="tech-pill"><FaJava /> Java</span>
      <span className="tech-pill"><SiJavascript /> JS</span>

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
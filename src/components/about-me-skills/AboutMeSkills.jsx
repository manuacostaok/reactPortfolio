import "./about-me-skills.css";

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiAngular,
  SiJira,
  SiPostman,
  SiVercel,
  SiRender
} from "react-icons/si";

export const AboutMeSkills = () => {
  const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <SiAngular />, name: "Angular" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiRender />, name: "Render" },
      { icon: <FaJava />, name: "JUnit" },
    ],
  },
];

  return (
    <section className="about-section" id="about">

      {/* ABOUT */}
      <div className="about">

        <h2>About</h2>

        <p>
          Full Stack Developer focused on building scalable web applications.
        </p>

        <p>
          Experience working with React, Node.js and MongoDB building APIs,
          authentication systems and modern interfaces.
        </p>

        <p>
          I like turning ideas into real, usable products with clean code.
        </p>

      </div>

      {/* TECHNOLOGIES */}
      <div className="skills">

  <h2>Technologies</h2>

  {skills.map((group, i) => (
    <div key={i} className="skill-group">

      <h3 className="skill-title">{group.title}</h3>

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
import "./about-me-skills.css";

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
      ],
    },
    {
      title: "Mobile",
      items: [
        { icon: <FaAndroid />, name: "Android" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJava />, name: "Kotlin" },
      ],
    },
    {
      title: "AI / Machine Learning",
      items: [
        { icon: <FaBrain />, name: "NLP" },
        { icon: <SiTensorflow />, name: "TensorFlow Lite" },
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
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
      ],
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* ABOUT */}
      <div className="about hero-about">
        
        <h2>About me</h2>

        <p>
          Full Stack Developer building scalable applications across web, mobile and AI systems.
        </p>

        <p>
          Experience delivering real-world projects including REST APIs, authentication systems,
          Android apps and AI-based solutions using computer vision and natural language processing.
        </p>

        <p>
          Focused on transforming complex ideas into efficient, user-ready products
          with clean and maintainable code.
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
import "./socials.css";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";

export const Socials = () => {
  return (
    <section className="socials-section">
      <div className="socials-text-section">
        <h2>Check out my socials</h2>
        <p>Feel free to send me a message, I'm always open to new ideas.</p>
      </div>
      <div className="social-buttons">
       
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/manuel-acosta-a1a238214/"
          target="_blank"
        >
          <img className="social-img linkedin" src={linkedin} />
        </a>
        <a
          className="social-btn"
          target="_blank"
          href="https://github.com/manuacostaok?tab=repositories"
        >
          <img className="social-img github" src={github} />
        </a>
        
      </div>
    </section>
  );
};
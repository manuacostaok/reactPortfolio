import { useState } from "react";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import { Navbar } from "../../components/navbar/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact-page.css";

export const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_3vxmpzu",
        "template_e2sdqnr",
        e.target,
        "nyYBn4MtO8T9aj2Uz"
      )
      .then(() => {
        swal({
          text: "Message sent successfully 🚀",
          icon: "success",
          timer: 2000,
        });

        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        swal({
          text: "Something went wrong",
          icon: "error",
        });

        setLoading(false);
      });
  };

  return (
    <>
      

      <section className="contact-page">

        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-info">

            <h2>Let’s build something together</h2>

            <p>
              I’m open to freelance work, collaborations or full-time roles.
              Send me a message and I’ll reply as soon as possible.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="contact-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>

            </div>

          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="6" required />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="submit-btn"
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

          </form>

        </div>

      </section>
    </>
  );
};
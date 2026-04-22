import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact-page.css";

export const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 🔊 sonido sutil (tipo click moderno)
  const playSuccessSound = () => {
    const audio = new Audio("/success.mp3"); // ponelo en /public
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};

    if (!form.from_name.trim()) {
      newErrors.from_name = "Name is required";
    }

    if (!form.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      newErrors.from_email = "Invalid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // CHANGE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {

      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_qqpsb33",
        "template_e2sdqnr",
        form,
        "nyYBn4MtO8T9aj2Uz"
      )
      .then(() => {
        playSuccessSound();
        setSuccess(true);


        setForm({
          from_name: "",
          from_email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      })
      .catch((err) => {
        console.error("EMAIL ERROR:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-page">


      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-info">

          <h2>Let’s build something together</h2>

          <p>
            I’m open to freelance work, collaborations or full-time roles.
            Send me a message and I’ll reply as soon as possible.
          </p>

          <div className="contact-socials">

            <a
              href="https://github.com/manuacostaok"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/acostamanueldev/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

        {/* FORM + ANIMATION */}
        <div className="form-wrapper">

          {success && (
            <div className="success-overlay">
              <div className="success-box">
                <div className="checkmark"></div>
                <p>Message Sent</p>
              </div>
            </div>
          )}

          <form
            className={`contact-form ${success ? "fade-out" : ""}`}
            onSubmit={handleSubmit}
          >

            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
              />
              {errors.from_name && <span className="error">{errors.from_name}</span>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
              />
              {errors.from_email && <span className="error">{errors.from_email}</span>}
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`submit-btn ${loading ? "loading" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};
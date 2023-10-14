import { useState } from "react";
import swal from "sweetalert";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
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
      .then((res) => {
        swal({
          text: "Consulta enviada correctamente",
          icon: "success",
        });
        setLoading(false);
      })
      .catch((err) =>
        swal({
          text: "Ha ocurrido un error",
          icon: "warning",
          timer: "2000",
        })
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-div">
        <h2>Send me an email</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-div">
            <label>Name</label>
            <input type="text" autoComplete="none" name="name" />
          </div>
          <div className="input-div">
            <label>Email</label>
            <input type="email" autoComplete="off" name="email" />
          </div>
          <div className="input-div">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
      </div>

      <a href="#top">Back to top</a>
    </section>
  );
};
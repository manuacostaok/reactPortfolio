import { useState } from "react";
import swal from "sweetalert";
import { Navbar } from "../../components/navbar/Navbar";

import "./contact-page.css";
import emailjs from "@emailjs/browser";

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
    <>
      <Navbar />
      <section className="contact-page-section">
        <div className="form-div">
          <h2>
            I’m excited to learn about your project. Complete the form and I
            will contact you as soon as posible.
          </h2>
          <form className="form-project-contact" onSubmit={handleSubmit}>
            <div className="contact-page-input-div">
              <label>Name</label>
              <input type="text" autoComplete="off" name="name" />
            </div>
            <div className="contact-page-input-div">
              <label>Email</label>
              <input type="email" autoComplete="none" name="email" />
            </div>
            <div className="contact-page-input-div">
              <label>Additional details</label>
              <textarea name="message" />
            </div>
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
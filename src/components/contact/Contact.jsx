import React, { useRef } from "react";
import "./contact.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ko9gzpj",
      "template_32p6luv",
      form.current,
      "APZnIwC2feDbN3Jmi"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Abdulaihalidu008@gmail.com</h5>
            <a href="mailto:abdulaihalidu008@gmail.com">Send a Mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+90 552 311 45 65</h5>
            <a
              href="https://wa.me/905523114565"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abdulai Halidu</h5>
            <a
              href="https://m.me/abdulaihalidujallo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input name="subject" type="text" placeholder="Subject/Topic" />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

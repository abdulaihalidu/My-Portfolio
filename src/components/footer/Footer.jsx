import React from "react";
import "./footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        My ABC
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/halidu-abdulai-87994520a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/abdulaihalidu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://youtube.com/channel/UCtsjymuoJjlV7_OX36WPUIg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="https://instagram.com/my_abc.official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; My ABC - All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

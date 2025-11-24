import React from 'react';
import './Footer.css';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import email from "../../assets/icons/email.png" ;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer section--sm">
      <div className="container footer__inner card">
        <div className="footer__brand">
          <div className="footer__name">Rounak Patidar</div>
          <div className="lead footer__tag">Frontend & Fullstack Developer</div>
        </div>

        <div className="footer__links">
          <a href="mailto:rounaksatyam@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><img src={email} alt="Email" /></a>
          <a href="https://github.com/rounakpatidar18" target="_blank" rel="noreferrer" aria-label="GitHub"><img src={github} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/rounak-patidar-881842231" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" /></a>
        </div>
      </div>

      <div className="footer__copyright">
        © {year} Rounak Patidar — Built with React
      </div>
    </footer>
  );
}

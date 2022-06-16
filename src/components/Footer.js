import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-class">
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      <footer className="footer-port">
      <p className="paragrafo">Este portifólio pertence à Alissandra Lima</p>
      <div className="container-icons">
      <a href="https://github.com/anaualima" className="iconlink">
      <i className="uil uil-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/alissandra-lima-developer/" className="iconlink">
      <i className="uil uil-linkedin"></i> 
      </a>
      <NavLink exact to="/contact" className="iconlink">
      <i className="uil uil-envelope-share"></i>
      </NavLink>
      </div>
      </footer>
    </div>
  )
}

export default Footer;
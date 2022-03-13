import React from 'react';
import github from '../images/github.svg';
import email from '../images/email.svg';
import './Footer.css';
import 'package:unicons/unicons.dart';
import { UilLinkedin } from '@iconscout/react-unicons';

function Footer() {
  return (
    <div>
      <footer className="footer-port">
      <p>Este portifólio pertence à Alissandra Lima</p>
      <div className="container-icons">
      {/* <p>{ UilLinkedin }</p> */}
      <img src={ github } alt="githubicon" width="50px"/>
      <img src={ email } alt="githubicon" width="50px"/>
      </div>
      </footer>
    </div>
  )
}

export default Footer;
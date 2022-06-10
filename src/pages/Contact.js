import React from 'react'
import Header from '../components/Header';
import './Contact.css';
import email from '../images/email.svg';
import FormEmail from '../components/FormEmail';

function Contact() {
  return (
    <div>
      <Header />
      <div className="container-general">
        <div className="container-align-contact-form">
        <div className="contact-container">
          <h1>Contatos</h1>
          <p>Linkedin: https://www.linkedin.com/in/alissandra-lima-developer/</p>
          <p>github: https://github.com/anaualima</p>
          <p>email: alissandraraysa@gmail.com</p>
        </div>
        <div className="container-form">
        <h3>Envie-me uma mensagem!</h3>
          <FormEmail />
        </div>
        </div>
        <img src={email} alt="ilustracao de email" className="ilustra-email" />
      </div>
    </div>
  )
}

export default Contact;


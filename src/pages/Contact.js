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
        <div className="contact-container">
        <h1>Contatos</h1>
        <p>Linkedin: https://www.linkedin.com/in/alissandra-lima-developer/</p>
        <p>github: https://github.com/anaualima</p>
        <p>email: alissandraraysa@gmail.com</p>
        </div>
        <img src={ email } alt="ilustracao de email" className="ilustra-email"/>
        </div>
        <FormEmail />
    </div>
  )
}

export default Contact;


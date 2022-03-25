import React from 'react'
import Header from '../components/Header';
import './Contact.css';

function Contact() {
  return (
    <div>
        <Header />
        <div className="contact-container">
        <h1>Contatos</h1>
        <p>Linkedin: https://www.linkedin.com/in/alissandra-lima-developer/</p>
        <p>github: https://github.com/anaualima</p>
        <p>email: alissandraraysa@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact;


import React from 'react';
import emailjs from 'emailjs-com';
import './FormEmail.css';

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'template_zh538ca', e.target, '6fEi1so2mYVPT02bh')

      .then((result) => {
        alert("Agradeço sua mensagem, em breve retornarei o contato!🟣");

      }, (error) => {
        alert(error.message)

      });
    e.target.reset()
  }

  return (
    <div className="container-send">
    <h3>Envie-me uma mensagem!</h3>
    <form onSubmit={sendEmail} className="container-form">
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensagem</label>
      <textarea name="message" />
      <input type="submit" value="Send"  className="send"/>
    </form>
    </div>
  );
};

export default ContactUs;
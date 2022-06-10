import React from 'react';
import emailjs from 'emailjs-com';

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
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
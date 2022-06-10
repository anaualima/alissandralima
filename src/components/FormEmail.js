import React from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {

  const sendEmail = (send) => {

    emailjs.send('contact_service', 'template_0llt2th', send)
      .then((result) => {
          alert("Agradeço sua mensagem!")
      }, (error) => {
          alert(error.message);
      });
  };

  return (
    <form  onSubmit={sendEmail}>
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
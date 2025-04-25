import React, { useRef, useState } from 'react';
import './contact.css';
import fblogo from '../../assets/fblogo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [resultMessage, setResultMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setResultMessage('');
    setIsError(false);

    emailjs.sendForm('service_ax3vk8u', 'template_nst3vsq', form.current, {
        publicKey: 'oF2B7AOSIYhGREEFo',})
      .then((result) => {
            console.log(result.text);
            e.target.reset();
            setResultMessage('Email sent successfully!');
            setIsError(false);
          },
          (error) => {
           console.log('FAILED...', error.text);
           setResultMessage('Failed to send email. Please try again.');
           setIsError(true);
         },
       );
  };
  return (
    <section id="contact">
      <h1 className="contactTitle">Contact Us</h1>
      <span className="contactText">We are glad to answer your questions!</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='name' required />
          <input type="email" className="email" placeholder='Your Email' name='emails' required />
          <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>
          {resultMessage && (
            <div className={`result-message ${isError ? 'error' : 'success'}`}>
              {resultMessage}
            </div>
          )}
          <div className="links">
          <a href="https://www.facebook.com/profile.php?id=61575498847885" target="_blank" rel="noopener noreferrer">
          <img src={fblogo} alt="facebook Logo" className="link"/>
          </a>
          </div>
        </form>
    </section>
  );
};

export default Contact;

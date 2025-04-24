import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';



const Intro = () => {
  return (
    <section id="intro">
       <div className="IntroContent">
        <span className="hello">Hello,</span>
        <span className="introText">We are the <span className="introName">Avangers</span><br/></span>
        <p className="introPara">We are driven college students who are enthusiastic about education and personal development.<br></br> Through this portfolio, which focuses on Python, We hope to demonstrate our commitment,<br></br> aptitude,and promise.Creativity,dedication,and a desire for perfection are evident in our work.</p>
       </div> 
      <img src={bg} alt="profile" className="bg"/>
    </section> 
  )
}

export default Intro;
import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section id="intro">
       <div className="IntroContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          <TypeAnimation
            sequence={[
              'We are the Avangers',
              2000,
              'We are driven college students',
              2000,
              'We are passionate about education',
              2000,
              'We are committed to excellence',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
        <p className="introPara">We are driven college students who are enthusiastic about education and personal development.<br></br> Through this portfolio, which focuses on Python, We hope to demonstrate our commitment,<br></br> aptitude,and promise.Creativity,dedication,and a desire for perfection are evident in our work.</p>
       </div> 
      <img src={bg} alt="profile" className="bg"/>
    </section> 
  )
}

export default Intro;
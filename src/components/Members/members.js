import React from 'react';
import './members.css';
import bg2 from '../../assets/profile2.jpg';
import cplus from '../../assets/C++.png';
import python from '../../assets/python.png';
import uk2 from '../../assets/uk2.jpg';
import stark from '../../assets/stark.jpg';
import php from '../../assets/php.png';
import java from '../../assets/java.png';
import github from '../../assets/githublogo.png';
import fblogo from '../../assets/fblogo.png';
import mark from '../../assets/mark.jpg';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';


const Members = () => {
  return (
    <section id="members">
        <span className="membersTitle">Members</span>

        <div className="memberSection">
        <div className="memberProfile">
              <img src={bg2} alt="profile1" className="memberImage"/>
              <h3 className="memberName">Louie E Caballero</h3>
              <p className="memberRole">(Project Manager)</p>
        <div className="links">
              <a href="https://github.com/FacelessOne123" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Logo" className="link"/>
              </a>
              <a href="https://www.facebook.com/Kuyamolouie" target="_blank" rel="noopener noreferrer">
              <img src={fblogo} alt="facebook Logo" className="link"/>
              </a>
        </div>
        </div>
        <div className="memberContent">
        <div className="skillBars1">
        <div className="skillBar1">
              <img src={cplus} alt="cplus" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>C++</h2>
              <p>I use C++ to simplifies complex programming tasks with its efficient use of object-oriented principles and system-level capabilities.</p>
        </div>
        </div>
        <div className="skillBar1">
              <img src={python} alt="python" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>Python</h2>
              <p>I use Python to automate repetitive tasks, analyze complex datasets, and build interactive web applications</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="memberSection">
        <div className="memberProfile">
              <img src={mark} alt="Mark Zuckerberg" className="memberImage"/>
              <h3 className="memberName">Mark Zuckerberg</h3>
              <p className="memberRole">(Designer)</p>
        <div className="links">
              <a href="https://x.com/finkd" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" className="link"/>
              </a>
              <a href="https://www.instagram.com/zuck/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="insta" className="link"/>
              </a>
        </div>
        </div>
        <div className="memberContent">
        <div className="skillBars2">
        <div className="skillBar1">
              <img src={python} alt="python" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>Python</h2>
              <p>I use Python to automate repetitive tasks, analyze complex datasets, and build interactive web applications</p>
        </div>
        </div>
        <div className="skillBar2">
              <img src={java} alt="Java" className="skillBarImg2"/>
        <div className="skillBarText2">
              <h2>Java</h2>
              <p>I use java an object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers Write Once and Run Anywhere (WORA)</p>
        </div>
        </div>
        <div className="skillBar2">
              <img src={php} alt="PHP" className="skillBarImg2"/>
        <div className="skillBarText2">
              <h2>PHP</h2>
              <p>I use php an open-source, widely used language for web development. Developers can create dynamic and interactive websites by embedding PHP code into HTML. PHP can handle data processing, session management, form handling, and database integration.</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="memberSection">
        <div className="memberProfile">
              <img src={uk2} alt="Jeff Bezos" className="memberImage"/>
              <h3 className="memberName">Jeff Bezos</h3>
              <p className="memberRole">(Qa Tester)</p>
        <div className="links">
              <a href="https://x.com/JeffBezos" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" className="link"/>
              </a>
              <a href="https://www.instagram.com/jeffbezos/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="insta" className="link"/>
              </a>
        </div>
        </div>
        <div className="memberContent">
        <div className="skillBars2">
        <div className="skillBar1">
              <img src={cplus} alt="C++" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>C++</h2>
              <p>I use C++ to simplifies complex programming tasks with its efficient use of object-oriented principles and system-level capabilities.</p>
        </div>
        </div>
        <div className="skillBar2">
              <img src={java} alt="Java" className="skillBarImg2"/>
        <div className="skillBarText1">
              <h2>Java</h2>
              <p>I use java an object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers Write Once and Run Anywhere (WORA)</p>
        </div>
        </div>
        </div>
        </div>
        </div>

       
        <div className="memberSection">
        <div className="memberProfile">
              <img src={stark} alt="Tony Stark" className="memberImage"/>
              <h3 className="memberName">Tony Stark</h3>
              <p className="memberRole">(Front End Developer)</p>
              <div className="links">
              <a href="https://x.com/RobertDowneyJr" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" className="link"/>
              </a>
              <a href="https://www.instagram.com/robertdowneyjr/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="insta" className="link"/>
              </a>
        </div>
        </div>
        <div className="memberContent">
        <div className="skillBars4">
        <div className="skillBar1">
              <img src={cplus} alt="C++" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>C++</h2>
              <p>I use C++ to simplifies complex programming tasks with its efficient use of object-oriented principles and system-level capabilities.</p>
        </div>
        </div>
        <div className="skillBar1">
              <img src={python} alt="Python" className="skillBarImg1"/>
        <div className="skillBarText1">
              <h2>Python</h2>
              <p>I use Python to automate repetitive tasks, analyze complex datasets, and build interactive web applications</p>
        </div>
        </div>
        <div className="skillBar2">
              <img src={java} alt="Java" className="skillBarImg2"/>
        <div className="skillBarText1">
              <h2>Java</h2>
              <p>I use java an object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers Write Once and Run Anywhere (WORA)</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
};

export default Members;
import React from 'react'
import './project.css';
import atlas from '../../assets/atlas.png';
import gentobox from '../../assets/gentobox.jpg';
import facebook from '../../assets/facebooklogo.jpg';
import amazon from '../../assets/amazon.png'; 
import stark from '../../assets/starkapp.jpg';

const Project = () => {
  return (
    <section id="project">
      <h2 className="projectTitle">Projects</h2>
    <div className="projectsContainer">
    <div className="projectCard">
    <div className="projectContent">
      <h3 className="projectName">Atlas It Solution</h3>
      <p className="projectDesc">Atlas is a dynamic monitoring website designed for companies. It offers real-time dashboards, interactive metrics, and comprehensive alerts, enabling teams to efficiently track performance, system health, and key business indicators all within a sleek, user friendly interface.</p>
    <div className="projectImage">
      <img src={atlas} alt="atlas" className="projectImg"/>
    </div>
    <div className="techStack">
      <h4>Technologies used</h4>
      <div className="techList">
      <span className="tech">HTML</span>
      <span className="tech">PHP</span>
      <span className="tech">FIGMA</span>
      <span className="tech">MYSQL</span>
      <span className="tech">TAILWIND CSS</span>
    </div>
    </div>
    </div>
    </div>

    <div className="projectCard">
    <div className="projectContent">
      <h3 className="projectName">GentoBox</h3>
      <p className="projectDesc">Gentobox is a convenient app designed to help users shop and subscribe with ease, streamlining their tasks and saving valuable time.</p>
    <div className="projectImage">
      <img src={gentobox} alt="gentobox" className="projectImg"/>
    </div>
    <div className="techStack">
      <h4>Technologies used</h4>
    <div className="techList">
      <span className="tech">FIREBASE</span>
      <span className="tech">KOTLIN</span>
      <span className="tech">FIGMA</span>
    </div>
    </div>
    </div>
    </div>

    <div className="projectCard">
    <div className="projectContent">
      <h3 className="projectName">Facebook</h3>
      <p className="projectDesc">Facebook is a social networking website where users can post comments, share photographs, and post links to news or other interesting content on the web, chat live, and watch short-form video.</p>
    <div className="projectImage">
      <img src={facebook} alt="atlas" className="projectImg"/>
    </div>
      <div className="techStack">
      <h4>Technologies used</h4>
    <div className="techList">
      <span className="tech">C++</span>
      <span className="tech">PHP</span>
      <span className="tech">PYTHON</span>
      <span className="tech">ERLANG</span>
      <span className="tech">JAVASCRIPT</span>
    </div>
    </div>
    </div>
    </div>

    <div className="projectCard">
    <div className="projectContent">
      <h3 className="projectName">Amazon</h3>
      <p className="projectDesc">A global technology company primarily involved in the sale of a range of products and services. The company's main activities include operating an online marketplace for both buyers and sellers, retailing through online and physical stores, manufacturing and selling electronic devices, and producing media content.</p>
    <div className="projectImage">
      <img src={amazon} alt="atlas" className="projectImg"/>
    </div>
    <div className="techStack">
      <h4>Technologies used</h4>
    <div className="techList">
      <span className="tech">C++</span>
      <span className="tech">JAVA</span>
      <span className="tech">RUBY</span>
      <span className="tech">NODE.JS</span>
      <span className="tech">JAVASCRIPT</span>
    </div>
    </div>
    </div>
    </div>

    <div className="projectCard">
    <div className="projectContent">
      <h3 className="projectName">Extremis 3.0</h3>
      <p className="projectDesc"> An app that ostensibly enhances the physical abilities of one another while serving Stark’s broader, more ethically ambiguous agenda by blurring the line between technological empowerment and control.</p>
    <div className="projectImage">
      <img src={stark} alt="atlas" className="projectImg"/>
    </div>
    <div className="techStack">
      <h4>Technologies used</h4>
    <div className="techList">
      <span className="tech">C++</span>
      <span className="tech">PYTHON</span>
      <span className="tech">FIGMA</span>
      <span className="tech">MYSQL</span>
      <span className="tech">TAILWIND CSS</span>
    </div>
    </div>
    </div>
    </div>    
    </div>
    </section>
  )
}

export default Project;
import React from 'react';
import './Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import engrenagem from '../images/engrenagem.svg';

function Projects() {
  return (
    <div>
      <Header />
      <div className="container-projects">
        <img src={engrenagem} alt="enfeite circular" className="engrenagem" />
        <div className="bigger-box">
          <h1>Projetos</h1>
          <h2>Escolha uma opção:</h2>
          <div className="link-box">
            <NavLink exact to="/projectsfrontend" className="projects-choice">Front End</NavLink>
            <NavLink exact to="/projectsbackend" className="projects-choice">Back End</NavLink>
          </div>
          <Footer className="project-footer" />
        </div>
      <div className="container-empty"></div>
      </div>
    </div>
  )
}

export default Projects;
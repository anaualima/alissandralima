import React from 'react';
import './Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import enfeite1 from '../images/enfeite1.svg';

function Projects() {
  return (
    <div>
      <Header />
      <div className="container-projects">
      <div className="bigger-box">
      <h1>Projetos</h1>
      <h2>Escolha uma opção:</h2>
      <div className="link-box">
      <NavLink exact to="/projectsfrontend" className="projects-choice ">Front End</NavLink>
      <NavLink exact to="/projectsbackend" className="projects-choice ">Back End</NavLink>
      </div>
      <Footer className="project-footer"/>
      </div>
      <div className="img-enfeite">
        <img src={ enfeite1 } alt="enfeite circular" className="enfeite1"/>
      </div>
      </div>
    </div>
  )
}

export default Projects;
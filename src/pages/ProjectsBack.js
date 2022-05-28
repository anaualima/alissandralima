import React from 'react';
import './ProjectsPages.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DataBackEnd } from '../services/dataBackEnd';

function Projects() {
  return (
    <div>
      <Header />
      <div className="cotainer-margin">
        <h1 className="projects-title">Projetos</h1>
        <h2 className="projects-subtitle">Os projetos estão organizados em ordem cronológica, iniciando do mais recente:</h2>
        <div className="spacing-projects-div">
          {DataBackEnd.map((p) => (
            <div key={p.name} className="projects-front">
              <div className="box-project-front">
                <img src={p.image} alt={p.name} className="img-front" />
                <div className="div-text-front">
                  <h4>O que é</h4>
                  <p>{p.name}</p>
                  <p>{p.description}</p>
                  <a href={p.github} className="iconProjects">
                    <i class="uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="footer-front" />
    </div>
  )
}

export default Projects;
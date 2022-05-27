import React from 'react';
import './ProjectsFront.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { dataFrontEnd } from '../services/dataFrontEnd';

function Projects() {
  return (
    <div>
      <Header />
      <div className="cotainer-margin">
      <h1 className="title">Projetos</h1>
      <h2 className="subtitle">Os projetos estão organizados em ordem cronológica, iniciando do mais recente:</h2>
      <div className="spacing-projects-div">
      {dataFrontEnd.map((p) => (
      <div key={p.name} className="projects-front">
        <a href={p.url}>
          <div className="box-project-front">
          <img src={ p.image } alt={ p.name } className="img-front"/>
           <div className="div-text-front">
            <h4>O que é</h4>
            <p>{p.name}</p>
            <p>{p.description}</p>
           </div>
          </div>
        </a>
        </div>
      ))}
      </div>
      </div>
      <Footer className="footer-front"/>
    </div>
  )
}

export default Projects;
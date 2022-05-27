import React from 'react';
import './Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { dataFrontEnd } from '../services/dataFrontEnd';

function Projects() {
  return (
    <div>
      <Header />
      <h1>Projetos</h1>
      <h2>Os projetos estão organizados em ordem cronológica, iniciando do mais recente:</h2>
      {dataFrontEnd.map((p) => (
      <div key={p.name}>
        <a href={p.url}>
          <div className="container-project">
          <img src={ p.image } alt={ p.name } />
            <h4>O que é</h4>
            <p>{p.name}</p>
            <p>{p.description}</p>
          </div>
        </a>
        </div>
      ))}
      <Footer />
    </div>
  )
}

export default Projects;
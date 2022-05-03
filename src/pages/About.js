import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import alissandralima from '../images/perfil.jpeg';
import './About.css';
import javascript from '../images/javascript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import docker from '../images/docker.png';
import jest from '../images/jest.png';
import nodejs from '../images/nodejs.png';
import mysql from '../images/mysql.png';
import enfeite1 from '../images/enfeite1.svg';

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
      <h1 className="h1-about">Um pouco sobre mim...</h1>
      <div className="description-container">
      <img src={ alissandralima } alt="alissandra-lima" className="alissandra-img"/>
      <div className="text-container">
      <p className="description">Olá me chamo Alissandra Lima, mas pode me chamar de Anauá sou estilista e agora aspirante a desenvolvedora web, meu principais interesses são na área de frontend, UX e UI design. Gosto muito de música e arte de maneira geral, com destaque para a cultura hip hop.
        Este porrifólio reúne parte dos meus projetos realizados na Trybe, no curso de desenvolvedores fullstack.
        Agradeço sua visita, e fique a vontade para "fuçar" tudinho!</p>
        <div className="my-languages">
        <p>Principais linguages e ferramentas trabalhadas:</p>
        <div className="container-icons-languages">
        <img 
        src={ javascript }
        alt="javascript"
        className="languagens-icons"
        />
        <img 
        src={ html }
        alt="html"
        className="languagens-icons"
        />
        <img 
        src={ css }
        alt="css"
        className="languagens-icons"
        />
        <img 
        src={ react }
        alt="react"
        className="languagens-icons"
        />
        <img 
        src={ redux }
        alt="redux"
        className="languagens-icons"
        />
        <img 
        src={ docker }
        alt="docker"
        className="languagens-icons"
        />
        <img 
        src={ jest }
        alt="jest"
        className="languagens-icons"
        />
        <img 
        src={ nodejs }
        alt="nodejs"
        className="node-icon"
        />
        <img 
        src={ mysql }
        alt="mysql"
        className="mysql-icon"
        />
        </div>
      </div>
      </div>
      </div>
      </div>
      {/* <div className="enfeite-div">
      <img 
      src={ enfeite1 }
      alt="bolas para enfeite"
      className="enfeite1"
      />
      </div> */}
      <Footer className="footer-about"/>
    </div>
  )
}

export default About;
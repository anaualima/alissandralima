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
import heroku from '../images/heroku.png';
import typescript from '../images/typescript.png';
import mocha from '../images/mocha.png';
import moldura from '../images/moldura.svg';

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1 className="h1-about">Um pouco sobre mim...</h1>
        <div className="img-perfil">
          <img src={alissandralima} alt="alissandra-lima" className="alissandra-img" />
        </div>
        <div className="img-moldura">
          <img src={moldura} alt="moldura" className="moldura" />
        </div>
        <div className="text-container">
          <p className="description">Olá me chamo Alissandra Lima, mas pode me chamar de Anauá sou desenvolvedora web front end e com alguns conhecimentos em back end.
            Este porrifólio reúne parte dos meus projetos realizados na Trybe, no curso de desenvolvedores fullstack.
            Agradeço sua visita, e fique a vontade para "fuçar" tudinho!</p>
        </div>
          <div className="my-languages">
            <p>Principais linguages e ferramentas trabalhadas:</p>
            <div className="container-icons-languages">
              <img
                src={javascript}
                alt="javascript"
                className="languagens-icons"
              />
              <img
                src={html}
                alt="html"
                className="languagens-icons"
              />
              <img
                src={css}
                alt="css"
                className="languagens-icons"
              />
              <img
                src={react}
                alt="react"
                className="react-icons"
              />
              <img
                src={redux}
                alt="redux"
                className="react-icons"
              />
              <img
                src={docker}
                alt="docker"
                className="languagens-icons"
              />
              <img
                src={jest}
                alt="jest"
                className="jest-icon"
              />
              <img
                src={nodejs}
                alt="nodejs"
                className="medium-icon"
              />
              <img
                src={mysql}
                alt="mysql"
                className="mysql-icon"
              />
              <img
                src={typescript}
                alt="typescript"
                className="medium-icon"
              />
              <img
                src={heroku}
                alt="heroku"
                className="medium-icon"
              />
              <img
                src={mocha}
                alt="mocha"
                className="medium-icon"
              />
            </div>
          </div>
      </div>
      <Footer className="footer-about" />
    </div>
  )
}

export default About;
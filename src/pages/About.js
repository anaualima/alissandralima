import React from 'react';
import Footer from '../components/Footer';
import alissandralima from '../images/perfil.jpeg';

function About() {
  return (
    <div>
      <h1>Um pouco sobre mim...</h1>
      <img src={ alissandralima } alt="alissandra-lima"/>
      <p>Olá me chamo Alissandra Lima, mas pode me chamar de Anauá sou estilista e agora aspirante a desenvolvedora web, meu principais interesses são na área de frontend, UX e UI design. Gosto muito de música e arte de maneira geral, com destaque para a cultura hip hop.
        Este porrifólio reúne parte dos meus projetos realizados na Trybe, no curso de desenvolvedores fullstack.
        Agradeço sua visita, e fique a vontade para "fuçar" tudinho!</p>
      <Footer />
    </div>
  )
}

export default About;
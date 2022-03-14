import React from 'react';
import Footer from '../components/Footer';
import solar from '../images/solarsystem.png';
import pixelsart from '../images/pixelsart.jpeg';
import todolist from '../images/todolist.jpeg';
import trybewarts from '../images/trybewarts.jpeg';
import miusic from '../images/music.jpeg';
import trybewallet from '../images/trybewallet.jpeg';
import cookit from '../images/cookit.jpeg';
import './Projects.css';

function Projects() {
  return (
    <div>
      <h1>Projetos</h1>
      <h2>Os projetos estão organizados em ordem cronológica</h2>
      <a href="https://cookit-app-de-receitas.vercel.app/#/">
      <div className="container-project">
        <img
          src={ cookit }
          alt="projeto-cookit"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>Este projeto foi elaborado em grupo (Alissandra Lima, Bruno Melo, Danielle Silva e Lucca Neiva), a proposta é um aplicativo de receitas pelo qual foi necessário o consumo de duas APIs, uma de comida e outra de bebidas. Cookit conta com vídeo, busca por ingrediente, e muitas facilidades na hora de cozinhar aquele prato maravilhoso.</p>
        </div>
      </div>
      </a>
      <a href="https://trybe-wallet-omega.vercel.app/">
      <div className="container-project">
        <img
          src={ trybewallet }
          alt="projeto-trybewallet"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>O trybe wallet funciona como uma espécie de carteira virtual, que a pessoa usuária poderá levar para uma viagem internacional sem problemas, pois é disponível o serviço de cambio de moedas, além da soma final dos valores, e ainda um bloco de anotações.</p>
        </div>
      </div>
      </a>
      <a href="https://miu-sic-trybe.vercel.app/">
      <div className="container-project">
        <img
          src={ miusic }
          alt="projeto-miu-sic"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>Miu-sic é um projeto de música, utilizando react foi realizado o consumo de uma API com tracks curta de artistas selecionados.</p>
        </div>
      </div>
      </a>
      <a href="https://solar-system-swart.vercel.app/">
      <div className="container-project">
        <img
          src={ solar }
          alt="projeto-solar-system"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>Solar System foi o primeiro projeto que pude experimentar o react, conhecer props, elementos pai, e treinar mais uma vez a estilização com css.</p>
        </div>
      </div>
      </a>
      <a href="https://trybewarts-chi.vercel.app/">
      <div className="container-project">
        <img
          src={ trybewarts }
          alt="projeto-trybewarts"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>Trybewarts, este projeto teve por objetivo o estudo das práticas de flexbox e estilização.</p>
        </div>
      </div>
      </a> 
      <a href="https://to-do-list-trybe.vercel.app/">
      <div className="container-project">
        <img
          src={ todolist }
          alt="projeto-todolist"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>O to do list é basicamente um bloquinho de notas virtual onde você pode anotar suas tarefas e de forma bem prática com duplo clique, dar o check em tarefas feitas. Além do botão de apagar a lista inteira para começar uma nova.</p>
        </div>
      </div>
      </a> 
      <a href="https://pixels-art-trybe.vercel.app/">
      <div className="container-project">
        <img
          src={ pixelsart }
          alt="projeto-pixelsart"
          className="img-project"
        />
        <div>
          <h4>
            O que é
          </h4>
          <p>O projeto pixelsart é um jogo que proporciona a pessoa usuária a possibilidade de pintar os pixels com as cores pirmárias, criando assim lindas artes, vem soltar sua criatividade!</p>
        </div>
      </div>
      </a>
      <Footer />
    </div>
  )
}

export default Projects;
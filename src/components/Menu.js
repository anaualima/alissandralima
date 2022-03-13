import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div>
     <nav className="menu">
      <NavLink exact to="/" className="navlink">Início</NavLink>
      <NavLink exact to="/about" className="navlink">Sobre mim</NavLink>
      <NavLink exact to="/projects" className="navlink">Meus projetos</NavLink>
      <NavLink exact to="/contact" className="navlink">Contatos</NavLink>
     </nav>
    </div>
  )
}

export default Menu;
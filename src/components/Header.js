import React from 'react';
import Menu from './Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [checkbox, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!checkbox)
  }

  return (
    <header>
      <div className="container-icon-menu">
      <div className="icon-menu">
        <input type="checkbox" id="checkmenu" onClick={ toggleMode }/>
        <label htmlFor="checkmenu" className="checkmenu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {checkbox&& <Menu />}
      </div>
      <nav>
      <NavLink exact to="/" className="navlink">Início</NavLink>
      <NavLink exact to="/about" className="navlink">Sobre mim</NavLink>
      <NavLink exact to="/projects" className="navlink">Meus projetos</NavLink>
      </nav>
    </header>
  )
}

export default Header;
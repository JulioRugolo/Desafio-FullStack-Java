import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sistema de Pontos Turísticos</Link>
      </div>
      <nav className="navbar-links">
        <Link to="/pais">Gestão de Países</Link>
        <Link to="/ponto-turistico">Gestão de Pontos Turísticos</Link>
      </nav>
    </header>
  );
};

export default Header;

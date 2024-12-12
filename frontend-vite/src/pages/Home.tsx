import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bem-vindo ao Sistema de Pontos Turísticos</h1>
      <p>Explore as funcionalidades abaixo:</p>

      <div style={{ marginTop: '2rem' }}>
        <Link
          to="/pais"
          style={{
            display: 'inline-block',
            margin: '1rem',
            padding: '1rem 2rem',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
          }}
        >
          Gestão de Países
        </Link>

        <Link
          to="/ponto-turistico"
          style={{
            display: 'inline-block',
            margin: '1rem',
            padding: '1rem 2rem',
            backgroundColor: '#28a745',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
          }}
        >
          Gestão de Pontos Turísticos
        </Link>
      </div>
    </div>
  );
};

export default Home;

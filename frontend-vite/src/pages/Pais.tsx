import React from 'react';
import ListaPaises from '../components/Pais/ListaPaises';
import CadastroPais from '../components/Pais/CadastroPais';
import '../styles/Pais.css';

const Pais: React.FC = () => {
  return (
    <div className="pais-container">
      <h1>Gestão de Países</h1>
      <div className="pais-sections">
        <CadastroPais />
        <ListaPaises />
      </div>
    </div>
  );
};

export default Pais;

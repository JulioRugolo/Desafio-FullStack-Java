import React from 'react';
import ListaPaises from '../components/Pais/ListaPaises';
import CadastroPais from '../components/Pais/CadastroPais';

const Pais: React.FC = () => {
  return (
    <div>
      <h1>Gestão de Países</h1>
      <CadastroPais />
      <ListaPaises />
    </div>
  );
};

export default Pais;

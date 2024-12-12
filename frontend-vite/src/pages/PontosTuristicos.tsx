import React from 'react';
import ListaPontosTuristicos from '../components/PontosTuristicos/ListaPontosTuristicos';
import CadastroPontoTuristico from '../components/PontosTuristicos/CadastroPontoTuristico';

const PontosTuristicos: React.FC = () => {
  return (
    <div className="pontos-turisticos-container">
      <CadastroPontoTuristico />
      <ListaPontosTuristicos />
    </div>
  );
};

export default PontosTuristicos;

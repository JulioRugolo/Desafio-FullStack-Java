import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pais from './pages/Pais';
import Header from './components/Header';
import EditarPais from './components/Pais/EditarPais';
import PontosTuristicos from './pages/PontosTuristicos';
import EditarPontoTuristico from './components/PontosTuristicos/EditarPontoTuristico';
import DetalhesPontoTuristico from './components/PontosTuristicos/DetalhesPontoTuristico';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pais" element={<Pais />} />
        <Route path="/editar-pais/:id" element={<EditarPais />} />
        <Route path="/ponto-turistico" element={<PontosTuristicos />} />
        <Route path="/editar-ponto-turistico/:id" element={<EditarPontoTuristico />} />
        <Route path="/detalhes-ponto-turistico/:id" element={<DetalhesPontoTuristico />} />

      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pais from './pages/Pais';
import Header from './components/Header';
import EditarPais from './components/Pais/EditarPais';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pais" element={<Pais />} />
        <Route path="/editar-pais/:id" element={<EditarPais />} />
        <Route path="/ponto-turistico" element={<div>Gestão de Pontos Turísticos</div>} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pais from './pages/Pais';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pais" element={<Pais />} />
      </Routes>
    </Router>
  );
};

export default App;

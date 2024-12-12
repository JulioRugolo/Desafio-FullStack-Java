import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Pais {
  id: number;
  nome: string;
}

const ListaPaises: React.FC = () => {
  const [paises, setPaises] = useState<Pais[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/pais')
      .then((response) => setPaises(response.data))
      .catch((error) => console.error('Erro ao carregar países:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Países</h2>
      <ul>
        {paises.map((pais) => (
          <li key={pais.id}>{pais.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPaises;

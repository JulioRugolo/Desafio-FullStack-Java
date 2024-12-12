import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ListaPaises.css';

interface Pais {
  id: number;
  nome: string;
}

const ListaPaises: React.FC = () => {
  const [paises, setPaises] = useState<Pais[]>([]);

  useEffect(() => {
    carregarPaises();
  }, []);

  const carregarPaises = () => {
    axios
      .get('http://localhost:3000/api/pais')
      .then((response) => setPaises(response.data))
      .catch((error) => console.error('Erro ao carregar países:', error));
  };

  const editarPais = (id: number) => {
    // Redirecionar para a página de edição
    window.location.href = `/editar-pais/${id}`;
  };

  const excluirPais = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este país?')) {
      axios
        .delete(`http://localhost:3000/api/pais/${id}`)
        .then(() => {
          alert('País excluído com sucesso!');
          carregarPaises();
        })
        .catch((error) => {
          console.error('Erro ao excluir país:', error);
          alert('Erro ao excluir país.');
        });
    }
  };

  return (
    <div className="lista-paises-container">
      <h2>Lista de Países</h2>
      <ul>
  {paises.map((pais) => (
    <li key={pais.id}>
      {pais.nome}
      <div>
        <button
          className="editar-btn"
          onClick={() => editarPais(pais.id)}
          title="Editar"
        >
          ✏️
        </button>
        <button
          className="excluir-btn"
          onClick={() => excluirPais(pais.id)}
          title="Excluir"
        >
          ❌
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ListaPaises;

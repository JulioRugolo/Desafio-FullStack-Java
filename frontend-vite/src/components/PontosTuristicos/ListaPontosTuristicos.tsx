import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/ListaPontosTuristicos.css';

interface PontoTuristico {
  id: number;
  nome: string;
  cidade: string;
  melhorEstacao: string;
  resumo: string;
}

const ListaPontosTuristicos: React.FC = () => {
  const [pontos, setPontos] = useState<PontoTuristico[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarPontosTuristicos();
  }, []);

  const carregarPontosTuristicos = () => {
    axios
      .get('http://localhost:3000/api/ponto-turistico')
      .then((response) => setPontos(response.data))
      .catch((error) => console.error('Erro ao carregar pontos turísticos:', error));
  };

  const editarPonto = (id: number) => {
    navigate(`/editar-ponto-turistico/${id}`);
  };

  const visualizarDetalhes = (id: number) => {
    navigate(`/detalhes-ponto-turistico/${id}`);
  };

  const excluirPonto = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este ponto turístico?')) {
      axios
        .delete(`http://localhost:3000/api/ponto-turistico/${id}`)
        .then(() => {
          alert('Ponto Turístico excluído com sucesso!');
          carregarPontosTuristicos();
        })
        .catch((error) => {
          console.error('Erro ao excluir ponto turístico:', error);
          alert('Erro ao excluir ponto turístico.');
        });
    }
  };

  return (
    <div className="lista-pontos-container">
      <h2>Lista de Pontos Turísticos</h2>
      <ul>
        {pontos.map((ponto) => (
          <li key={ponto.id}>
            <span
              className="link-detalhes"
              onClick={() => visualizarDetalhes(ponto.id)}
              title="Visualizar detalhes"
            >
              {ponto.nome}
            </span>{' '}
            - {ponto.cidade} ({ponto.melhorEstacao})
            <button
              className="editar-btn"
              onClick={() => editarPonto(ponto.id)}
              title="Editar"
            >
              ✏️
            </button>
            <button
              className="excluir-btn"
              onClick={() => excluirPonto(ponto.id)}
              title="Excluir"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPontosTuristicos;

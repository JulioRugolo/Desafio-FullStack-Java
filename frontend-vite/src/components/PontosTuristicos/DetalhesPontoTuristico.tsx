import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ListaComentarios from '../Comentarios/ListaComentarios';
import CadastroComentario from '../Comentarios/CadastroComentario';
import '../../styles/DetalhesPontoTuristico.css';

interface PontoTuristico {
  id: number;
  nome: string;
  cidade: string;
  melhorEstacao: string;
  resumo: string;
  pais: {
    nome: string;
  };
}

interface Comentario {
  id: number;
  autor: string;
  texto: string;
  createdAt: string;
}

const DetalhesPontoTuristico: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ponto, setPonto] = useState<PontoTuristico | null>(null);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/ponto-turistico/${id}`)
        .then((response) => setPonto(response.data))
        .catch((error) => console.error('Erro ao carregar detalhes do ponto turístico:', error));

      axios
        .get(`http://localhost:3000/api/comentario/${id}`)
        .then((response) => setComentarios(response.data))
        .catch((error) => console.error('Erro ao carregar comentários:', error));
    }
  }, [id]);

  const atualizarComentarios = () => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/comentario/${id}`)
        .then((response) => setComentarios(response.data))
        .catch((error) => console.error('Erro ao carregar comentários:', error));
    }
  };

  if (!ponto) {
    return <div>Carregando detalhes...</div>;
  }

  return (
    <div className="detalhes-ponto-container">
      <h2>Detalhes do Ponto Turístico</h2>
      <p><strong>Nome:</strong> {ponto.nome}</p>
      <p><strong>Cidade:</strong> {ponto.cidade}</p>
      <p><strong>Melhor Estação:</strong> {ponto.melhorEstacao}</p>
      <p><strong>Resumo:</strong> {ponto.resumo}</p>
      <p><strong>País:</strong> {ponto.pais.nome}</p>
      <button onClick={() => navigate('/ponto-turistico')}>Voltar</button>

      <h3>Comentários</h3>
      <ListaComentarios comentarios={comentarios} onAtualizarComentarios={atualizarComentarios} />
      
      <h3>Adicionar Comentário</h3>
      <CadastroComentario pontoTuristicoId={id!} atualizarComentarios={atualizarComentarios} />
    </div>
  );
};

export default DetalhesPontoTuristico;

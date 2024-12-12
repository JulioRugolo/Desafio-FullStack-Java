import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ListaComentarios.css';

interface Comentario {
  id: number;
  autor: string;
  texto: string;
  createdAt: string;
}

interface ListaComentariosProps {
  comentarios: Comentario[];
  onAtualizarComentarios: () => void;
}

const ListaComentarios: React.FC<ListaComentariosProps> = ({ comentarios, onAtualizarComentarios }) => {
  const [editandoComentario, setEditandoComentario] = useState<Comentario | null>(null);
  const [novoTexto, setNovoTexto] = useState('');

  const formatarData = (data: string): string => {
    try {
      const dataFormatada = new Date(data);
      if (!isNaN(dataFormatada.getTime())) {
        return dataFormatada.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      } else {
        return 'Data inválida';
      }
    } catch {
      return 'Data inválida';
    }
  };

  const editarComentario = (comentario: Comentario) => {
    setEditandoComentario(comentario);
    setNovoTexto(comentario.texto);
  };

  const salvarEdicao = async () => {
    if (editandoComentario) {
      try {
        await axios.put(`http://localhost:3000/api/comentario/${editandoComentario.id}`, {
          texto: novoTexto,
        });
        alert('Comentário atualizado com sucesso!');
        setEditandoComentario(null);
        onAtualizarComentarios();
      } catch (error) {
        console.error('Erro ao atualizar comentário:', error);
        alert('Erro ao atualizar comentário.');
      }
    }
  };

  const cancelarEdicao = () => {
    setEditandoComentario(null);
    setNovoTexto('');
  };

  const apagarComentario = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este comentário?')) {
      try {
        await axios.delete(`http://localhost:3000/api/comentario/${id}`);
        alert('Comentário excluído com sucesso!');
        onAtualizarComentarios();
      } catch (error) {
        console.error('Erro ao excluir comentário:', error);
        alert('Erro ao excluir comentário.');
      }
    }
  };

  return (
    <div className="lista-comentarios-container">
      {comentarios.length > 0 ? (
        comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario-item">
            {editandoComentario?.id === comentario.id ? (
              <>
                <textarea
                  value={novoTexto}
                  onChange={(e) => setNovoTexto(e.target.value)}
                  className="textarea-editar"
                />
                <div className="botoes-edicao">
                  <button onClick={salvarEdicao} className="salvar-btn">Salvar</button>
                  <button onClick={cancelarEdicao} className="cancelar-btn">Cancelar</button>
                </div>
              </>
            ) : (
              <>
                <p><strong>{comentario.autor}</strong></p>
                <p>{comentario.texto}</p>
                <p><em>{formatarData(comentario.createdAt)}</em></p>
                <div className="botoes-comentario">
                  <button onClick={() => editarComentario(comentario)} className="editar-btn">✏️ Editar</button>
                  <button onClick={() => apagarComentario(comentario.id)} className="excluir-btn">❌ Excluir</button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p>Seja o primeiro a comentar sobre este ponto turístico!</p>
      )}
    </div>
  );
};

export default ListaComentarios;

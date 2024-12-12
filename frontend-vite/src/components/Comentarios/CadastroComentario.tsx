import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/CadastroComentario.css';

interface CadastroComentarioProps {
  pontoTuristicoId: string;
  atualizarComentarios: () => void;
}

const CadastroComentario: React.FC<CadastroComentarioProps> = ({ pontoTuristicoId, atualizarComentarios }) => {
  const [form, setForm] = useState({
    autor: '',
    texto: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/api/comentario/${pontoTuristicoId}`, form)
      .then(() => {
        alert('Comentário adicionado com sucesso!');
        setForm({ autor: '', texto: '' });
        atualizarComentarios(); // Atualiza os comentários após o envio
      })
      .catch((error) => {
        console.error('Erro ao adicionar comentário:', error);
        alert('Erro ao adicionar comentário.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="cadastro-comentario-form">
      <div>
        <label>Autor:</label>
        <input
          name="autor"
          placeholder="Seu nome"
          value={form.autor}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Comentário:</label>
        <textarea
          name="texto"
          placeholder="Digite seu comentário"
          value={form.texto}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CadastroComentario;

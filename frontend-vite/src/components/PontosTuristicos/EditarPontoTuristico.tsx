import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/EditarPontoTuristico.css';

const EditarPontoTuristico: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    cidade: '',
    melhorEstacao: '',
    resumo: '',
    paisId: '',
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/ponto-turistico/${id}`)
        .then((response) => setForm(response.data))
        .catch((error) => console.error('Erro ao carregar ponto turístico:', error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/ponto-turistico/${id}`, form)
      .then(() => {
        alert('Ponto Turístico atualizado com sucesso!');
        navigate('/ponto-turistico');
      })
      .catch((error) => {
        console.error('Erro ao atualizar ponto turístico:', error);
        alert('Erro ao atualizar ponto turístico.');
      });
  };

  return (
    <div className="editar-ponto-container">
      <h2>Editar Ponto Turístico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cidade:
            <input
              name="cidade"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Melhor Estação:
            <input
              name="melhorEstacao"
              placeholder="Melhor Estação (ex: Verão)"
              value={form.melhorEstacao}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Resumo:
            <input
              name="resumo"
              placeholder="Resumo"
              value={form.resumo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            País:
            <input
              name="paisId"
              placeholder="ID do País"
              value={form.paisId}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarPontoTuristico;

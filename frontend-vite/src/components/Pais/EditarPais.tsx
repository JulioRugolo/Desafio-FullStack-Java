import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/EditarPais.css'; // Importando o CSS

const EditarPais: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    sigla: '',
    ddi: '',
    continente: '',
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/pais/${id}`)
        .then((response) => setForm(response.data))
        .catch((error) => console.error('Erro ao carregar país:', error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/pais/${id}`, form)
      .then(() => {
        alert('País atualizado com sucesso!');
        navigate('/pais');
      })
      .catch((error) => {
        console.error('Erro ao atualizar país:', error);
        alert('Erro ao atualizar país.');
      });
  };

  return (
    <div className="editar-pais-container">
      <h2>Editar País</h2>
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
            Sigla:
            <input
              name="sigla"
              placeholder="Sigla (2-3 caracteres)"
              value={form.sigla}
              onChange={handleChange}
              maxLength={3}
              required
            />
          </label>
        </div>
        <div>
          <label>
            DDI:
            <input
              name="ddi"
              placeholder="Código DDI"
              value={form.ddi}
              onChange={handleChange}
              type="number"
              min={1}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Continente:
            <input
              name="continente"
              placeholder="Continente"
              value={form.continente}
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

export default EditarPais;

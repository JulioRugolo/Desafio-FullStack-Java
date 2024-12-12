import React, { useState } from 'react';
import axios from 'axios';

const CadastroPais: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    sigla: '',
    ddi: '',
    continente: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = { ...form, ddi: parseInt(form.ddi, 10) };

    axios
      .post('http://localhost:3000/api/pais', data)
      .then(() => {
        setMessage('País cadastrado com sucesso!');
        setForm({
          nome: '',
          sigla: '',
          ddi: '',
          continente: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar país:', error);
        setMessage('Erro ao cadastrar país. Verifique os dados.');
      });
  };

  return (
    <div>
      <h2>Cadastro de País</h2>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default CadastroPais;

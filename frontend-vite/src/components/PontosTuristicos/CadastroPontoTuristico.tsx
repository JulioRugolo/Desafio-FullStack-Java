import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/CadastroPontoTuristico.css';

const CadastroPontoTuristico: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    cidade: '',
    melhorEstacao: '',
    resumo: '',
    paisId: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/ponto-turistico', form)
      .then(() => {
        setMessage('Ponto Turístico cadastrado com sucesso!');
        setForm({
          nome: '',
          cidade: '',
          melhorEstacao: '',
          resumo: '',
          paisId: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar ponto turístico:', error);
        setMessage('Erro ao cadastrar ponto turístico. Verifique os dados.');
      });
  };

  return (
    <div className="cadastro-ponto-container">
      <h2>Cadastro de Ponto Turístico</h2>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default CadastroPontoTuristico;

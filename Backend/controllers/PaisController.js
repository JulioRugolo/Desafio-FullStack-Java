const Pais = require('../models/Pais');

// Criar um novo país
const criarPais = async (req, res) => {
  try {
    const pais = await Pais.create(req.body);
    res.status(201).json(pais);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todos os países
const listarPaises = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.json(paises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um país pelo ID
const obterPais = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findByPk(id);

    if (!pais) {
      return res.status(404).json({ error: 'País não encontrado.' });
    }

    res.json(pais);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um país
const atualizarPais = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findByPk(id);

    if (!pais) {
      return res.status(404).json({ error: 'País não encontrado.' });
    }

    await pais.update(req.body);
    res.json(pais);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletarPais = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findByPk(id);

    if (!pais) {
      return res.status(404).json({ error: 'País não encontrado.' });
    }

    await pais.destroy();
    res.json({ message: 'País deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarPais,
  listarPaises,
  obterPais,
  atualizarPais,
  deletarPais
};

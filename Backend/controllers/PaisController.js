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

module.exports = {
  criarPais,
  listarPaises,
};

const PontoTuristico = require('../models/PontoTuristico');
const Pais = require('../models/Pais');

// Criar um novo ponto turístico
const criarPontoTuristico = async (req, res) => {
  try {
    const pontoTuristico = await PontoTuristico.create(req.body);
    res.status(201).json(pontoTuristico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o ponto turístico.' });
  }
};

// Listar todos os pontos turísticos
const listarPontosTuristicos = async (req, res) => {
    try {
      const pontosTuristicos = await PontoTuristico.findAll({
        attributes: ['id', 'nome', 'cidade', 'melhorEstacao', 'resumo'],
        include: { 
          model: Pais, 
          as: 'pais',
          attributes: ['id', 'nome']
        },
      });
  
      // Converte o ID para string
      const pontosTuristicosFormatados = pontosTuristicos.map(ponto => ({
        ...ponto.toJSON(),
        id: String(ponto.id),
        pais: ponto.pais ? { ...ponto.pais.toJSON(), id: String(ponto.pais.id) } : null,
      }));
  
      res.json(pontosTuristicosFormatados);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os pontos turísticos.' });
    }
  };

// Obter um ponto turístico por ID
const obterPontoTuristico = async (req, res) => {
  try {
    const pontoTuristico = await PontoTuristico.findByPk(req.params.id, {
      include: { model: Pais, as: 'pais' },
    });
    if (!pontoTuristico) {
      return res.status(404).json({ error: 'Ponto turístico não encontrado.' });
    }
    res.json(pontoTuristico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o ponto turístico.' });
  }
};

// Atualizar um ponto turístico por ID
const atualizarPontoTuristico = async (req, res) => {
  try {
    const pontoTuristico = await PontoTuristico.findByPk(req.params.id);
    if (!pontoTuristico) {
      return res.status(404).json({ error: 'Ponto turístico não encontrado.' });
    }
    await pontoTuristico.update(req.body);
    res.json(pontoTuristico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o ponto turístico.' });
  }
};

// Deletar um ponto turístico por ID
const deletarPontoTuristico = async (req, res) => {
  try {
    const pontoTuristico = await PontoTuristico.findByPk(req.params.id);
    if (!pontoTuristico) {
      return res.status(404).json({ error: 'Ponto turístico não encontrado.' });
    }
    await pontoTuristico.destroy();
    res.json({ message: 'Ponto turístico excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o ponto turístico.' });
  }
};

module.exports = {
  criarPontoTuristico,
  listarPontosTuristicos,
  obterPontoTuristico,
  atualizarPontoTuristico,
  deletarPontoTuristico,
};

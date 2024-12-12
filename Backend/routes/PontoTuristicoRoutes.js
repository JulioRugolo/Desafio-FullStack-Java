const express = require('express');
const {
  criarPontoTuristico,
  listarPontosTuristicos,
  obterPontoTuristico,
  atualizarPontoTuristico,
  deletarPontoTuristico,
} = require('../controllers/PontoTuristicoController');

const router = express.Router();

// Rotas
 // Criar um novo ponto turístico
router.post('/', criarPontoTuristico);

// Listar todos os pontos turísticos
router.get('/', listarPontosTuristicos);

 // Obter um ponto turístico por ID
router.get('/:id', obterPontoTuristico);

// Atualizar um ponto turístico por ID
router.put('/:id', atualizarPontoTuristico);

// Deletar um ponto turístico por ID
router.delete('/:id', deletarPontoTuristico);

module.exports = router;

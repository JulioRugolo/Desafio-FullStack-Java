const express = require('express');
const {
  criarPais,
  listarPaises,
  obterPais,
  atualizarPais,
  deletarPais,
} = require('../controllers/PaisController');

const router = express.Router();

// Rota para criar um novo país
router.post('/', criarPais);

// Rota para listar todos os países
router.get('/', listarPaises);

// Rota para obter um país pelo ID
router.get('/:id', obterPais);

// Rota para atualizar um país pelo ID
router.put('/:id', atualizarPais);

// Rota para deletar um país pelo ID
router.delete('/:id', deletarPais);

module.exports = router;

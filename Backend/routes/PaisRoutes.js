const express = require('express');
const { criarPais, listarPaises } = require('../controllers/PaisController');

const router = express.Router();

// Rota para criar um novo país
router.post('/', criarPais);

// Rota para listar todos os países
router.get('/', listarPaises);

module.exports = router;

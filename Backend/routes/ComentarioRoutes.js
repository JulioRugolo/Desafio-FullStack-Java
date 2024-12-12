const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController.js');

// Listar todos os comentários de um ponto turístico
router.get('/:idPontoTuristico', ComentarioController.listarComentariosPorPontoTuristico);

// Criar um comentário para um ponto turístico
router.post('/:idPontoTuristico', ComentarioController.criarComentario);

// Atualizar um comentário existente
router.put('/:idComentario', ComentarioController.atualizarComentario);

// Deletar um comentário existente
router.delete('/:idComentario', ComentarioController.deletarComentario);

module.exports = router;

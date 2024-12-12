const Comentario = require('../models/Comentario');
const PontoTuristico = require('../models/PontoTuristico');

// Listar todos os comentários de um ponto turístico
const listarComentariosPorPontoTuristico = async (req, res) => {
  try {
    const { idPontoTuristico } = req.params;
    const comentarios = await Comentario.findAll({
      where: { pontoTuristicoId: idPontoTuristico },
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os comentários.' });
  }
};

// Criar um novo comentário para um ponto turístico
const criarComentario = async (req, res) => {
  try {
    const { idPontoTuristico } = req.params;
    const { autor, texto } = req.body;

    const pontoTuristico = await PontoTuristico.findByPk(idPontoTuristico);
    if (!pontoTuristico) {
      return res.status(404).json({ error: 'Ponto turístico não encontrado.' });
    }

    const novoComentario = await Comentario.create({
      autor,
      texto,
      pontoTuristicoId: idPontoTuristico,
      dataCriacao: new Date(),
    });

    res.status(201).json(novoComentario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o comentário.' });
  }
};

// Atualizar um comentário existente
const atualizarComentario = async (req, res) => {
  try {
    const { idComentario } = req.params;
    const { texto } = req.body;

    const comentario = await Comentario.findByPk(idComentario);
    if (!comentario) {
      return res.status(404).json({ error: 'Comentário não encontrado.' });
    }

    comentario.texto = texto;
    await comentario.save();

    res.status(200).json(comentario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o comentário.' });
  }
};

// Deletar um comentário existente
const deletarComentario = async (req, res) => {
  try {
    const { idComentario } = req.params;

    const comentario = await Comentario.findByPk(idComentario);
    if (!comentario) {
      return res.status(404).json({ error: 'Comentário não encontrado.' });
    }

    await comentario.destroy();
    res.status(200).json({ message: 'Comentário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o comentário.' });
  }
};

module.exports = {
  listarComentariosPorPontoTuristico,
  criarComentario,
  atualizarComentario,
  deletarComentario,
};

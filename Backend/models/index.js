const PontoTuristico = require('./PontoTuristico');
const Comentario = require('./Comentario');
const Pais = require('./Pais');
require('./associations'); // Carregar associações

module.exports = {
  PontoTuristico,
  Comentario,
  Pais,
};

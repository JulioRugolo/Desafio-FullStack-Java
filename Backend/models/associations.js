const PontoTuristico = require('./PontoTuristico');
const Comentario = require('./Comentario');

// Relacionamento entre PontoTuristico e Comentarios
PontoTuristico.hasMany(Comentario, {
  foreignKey: 'pontoTuristicoId',
  as: 'comentarios',
});
Comentario.belongsTo(PontoTuristico, { foreignKey: 'pontoTuristicoId', as: 'pontoTuristico' });

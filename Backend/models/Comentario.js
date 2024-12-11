const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PontoTuristico = require('./PontoTuristico');

const Comentario = sequelize.define('Comentario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dataCriacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Comentario.belongsTo(PontoTuristico, { foreignKey: 'pontoTuristicoId', as: 'pontoTuristico' });

module.exports = Comentario;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pais = require('./Pais');

const PontoTuristico = sequelize.define('PontoTuristico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  melhorEstacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resumo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

PontoTuristico.belongsTo(Pais, { foreignKey: 'paisId', as: 'pais' });

module.exports = PontoTuristico;

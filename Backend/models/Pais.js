const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pais = sequelize.define('Pais', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ddi: { // Alterado para camelCase
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
    },
  },
  sigla: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 3], // Garantir que a sigla tenha 2 ou 3 caracteres
    },
  },
  continente: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  tableName: 'Pais', // Define o nome exato da tabela
  timestamps: false, // Remove createdAt e updatedAt
});

module.exports = Pais;

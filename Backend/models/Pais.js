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
  },
});

module.exports = Pais;

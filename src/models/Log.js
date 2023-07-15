const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Log = sequelize.define('Log', {
  endpoint: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
});

module.exports = Log;

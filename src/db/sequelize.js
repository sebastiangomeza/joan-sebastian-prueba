require('dotenv').config();
const Sequelize = require('sequelize');
import config from '../config'
const sequelize = new Sequelize(
    config.development
);

module.exports = sequelize;

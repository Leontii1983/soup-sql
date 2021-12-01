const Sequelize = require('sequelize');
const db = require('../config/database');

const Soupe = db.define("soupe", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingridients: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  video: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  nutrition: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  vitamines: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  expiry: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

});

module.exports = Soupe;
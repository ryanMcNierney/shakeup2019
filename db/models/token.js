const Sequelize = require('sequelize')
const db = require('../db')

const Token = db.define('token', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  access_token: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  refresh_token: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Token

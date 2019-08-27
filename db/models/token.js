const Sequelize = require('sequelize')
const db = require('../db')

const Token = db.define('token', {
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

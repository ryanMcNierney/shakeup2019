const Sequelize = require('sequelize')
const db = require('../db')

const Team = db.define('team', {
  team_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team_key: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team_logo: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Team

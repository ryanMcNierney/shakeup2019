const Sequelize = require('sequelize')
const db = require('../db')

const Standings = db.define('standings', {
  team_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  record: {
    type: Sequelize.STRING,
    allowNull: false
  },
  win: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  loss: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tie: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  top_six_win: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  top_six_loss: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_win: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_loss: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pts_for: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pts_against: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Standings

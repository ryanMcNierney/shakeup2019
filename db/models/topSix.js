const Sequelize = require('sequelize')
const db = require('../db')

const TopSix = db.define('top_six', {
  ts_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  current_week: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  team_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  top_six: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = TopSix

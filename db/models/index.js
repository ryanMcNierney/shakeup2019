const Team = require('./team')
const Standings = require('./standings')
const Token = require('./token')
const TopSix = require('./topSix')

Standings.belongsTo(Team)
Team.hasMany(Standings)

TopSix.belongsTo(Team)
Team.hasMany(TopSix)

module.exports = {
  Team, Standings, Token, TopSix
}

const Yahoo = require('../auth/yahoo')
const TopSix = require('./topSixService')

class Standings {

  async clean() {
    const y = new Yahoo
    const t = new TopSix
    // pull current data
    const standings = await y.getStandings()

    // clean the standings
    const standingsArr = standings.standings.map(team => {
      const { team_id } = team
      const { wins, losses, ties } = team.standings.outcome_totals
      const { points_for, points_against } = team.standings
      return {
        team_id,
        win: wins,
        loss: losses,
        tie: ties,
        pts_for: parseFloat(points_for), // only one that is a string
        pts_against: points_against
      }
    })

    // loop through standingsArr and add topSix totals
    // standingsArr will change by rank
    const topSixTotals = await t.getTotals()

    standingsArr.forEach((row) => {
      const { team_id } = row
      row.top_six_win = topSixTotals[team_id]['win']
      row.top_six_loss = topSixTotals[team_id]['loss']

      // add the total_win/total_loss
      const total_win = row.top_six_win + row.win
      const total_loss = row.top_six_loss + row.loss

      row.total_win = total_win
      row.toal_loss = total_loss
    })

    return standingsArr

  }

}

module.exports = Standings

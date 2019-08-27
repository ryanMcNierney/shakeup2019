const Yahoo = require('../auth/yahoo')
const TopSixService = require('./topSixService')
const { Standings } = require('../../db/models')

class StandingsService {

  async clean() {
    const y = new Yahoo
    const t = new TopSixService
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

      // add the updated record as a string
      row.record = '' + total_win + '-' + total_loss + '-' + row.tie

    })

    return standingsArr

  }

  async updateDb() {
    try {
      // Get the clean standings
      const customStandings = await this.clean()

      // Update each to the Standings table
      customStandings.forEach(async (team) => {
        const config = {
          record: team.record,
          win: team.win,
          loss: team.loss,
          tie: team.tie,
          top_six_win: team.top_six_win,
          top_six_loss: team.top_six_loss,
          total_win: team.toal_win,
          total_loss: team.total_loss,
          pts_for: team.pts_for,
          pts_against: team.pts_against
        }

        // Update where team_id === team_id
        Standings.update(config, {
          where: {
            team_id: team.team_id
          }
        })
          .spread((numberOfAffectedRows) => {
            console.log('Rows affected =', numberOfAffectedRows)
          })

      })

    } catch (err) {
      console.log('Error saving Standings to DB')
    }
  }

}

module.exports = StandingsService

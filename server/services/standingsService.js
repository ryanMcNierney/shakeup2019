const Yahoo = require('../auth/yahoo')
const TopSixService = require('./topSixService')
const { Standings, Team } = require('../../db/models')
const { default: PQueue } = require('p-queue')
const queue = new PQueue({ concurrency: 1 })

class StandingsService {

  async clean() {
    const y = new Yahoo
    const t = new TopSixService
    // pull current data
    const standings = await y.getStandings()
    const topSixTotals = await t.getTotals()

    // clean the standings
    const standingsArr = standings.standings.map(team => {
      const { team_id } = team
      const { wins, losses, ties } = team.standings.outcome_totals
      const { points_for, points_against } = team.standings
      const top_six_win = topSixTotals[team_id]['win']
      const top_six_loss = topSixTotals[team_id]['loss']
      const total_win = top_six_win + wins
      const total_loss = top_six_loss + losses
      const record = '' + total_win + '-' + total_loss + '-' + ties
      return {
        team_id,
        record,
        win: wins,
        loss: losses,
        tie: ties,
        top_six_win,
        top_six_loss,
        total_win,
        total_loss,
        pts_for: parseFloat(points_for), // only one that is a string
        pts_against: points_against
      }
    })

    return standingsArr

  }

  async updateDb() {
    try {
      // Get the clean standings
      const customStandings = await this.clean()

      const standingsQueue = []
      customStandings.forEach(team => {
        const standingsPromise = () => {
          return new Promise(resolve => {
            resolve(
              Standings.update(team, {
                where: { team_id: team.team_id }
              })
            )
          })
        }
        standingsQueue.push(standingsPromise)
      })

      const standings = await queue.addAll(standingsQueue)
      console.log(`Updated ${standings.length} into the standings table`)

    } catch (err) {
      console.log('Error saving Standings to DB')
    }
  }

  async get() {
    try {
      const standings = []
      const data = await Standings.findAll({
        include: [{ model: Team }]
      })

      data.forEach(team => {
        standings.push(team.dataValues)
      })

      // sort by total_win
      // how to sort by also points???
      const sorted = standings.sort((a, b) => (a.total_win < b.total_win) ? 1 : (a.total_win === b.total_win) ? ((a.pts_for < b.pts_for) ? 1 : -1) : -1)

      return sorted

    } catch (err) {
      console.log('Error grabbing standings from the DB', err)
    }
  }
}

module.exports = StandingsService

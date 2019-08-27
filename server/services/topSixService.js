const Yahoo = require('../auth/yahoo')
const { TopSix } = require('../../db/models')

class TopSixService {

  async clean() {
    // pull current data
    const y = new Yahoo
    const scoreboard = await y.getScoreboard()

    // get current week
    const { current_week } = scoreboard

    // get current matachups
    const { matchups } = scoreboard.scoreboard

    // get clean scores
    const scores = []
    matchups.forEach(match => {
      const { teams } = match
      teams.forEach(team => {
        const { team_id } = team
        const { total } = team.points

        // create table id (round.team_id)
        const id = current_week + '.' + team_id

        scores.push({
          id,
          current_week: parseInt(current_week),
          team_id: parseInt(team_id),
          total: parseFloat(total)
        })
      })
    })

    // sort the scores
    const sortedScores = scores.sort((a, b) => ((a.total > b.total) ? -1 : 1))

    // assign top 6
    // to-do: how to handle ties??
    sortedScores.map(team => {
      const i = sortedScores.indexOf(team)
      if (i >= 0 && i <= 5) {
        return team.top_six = true
      } else {
        return team.top_six = false
      }
    })

    return sortedScores
  }

  async updateDb() {
    try {
      const cleanTopSix = await this.clean()
      const { sortedScores } = cleanTopSix
      sortedScores.forEach(team => {
        const { id, current_week, team_id, total, top_six } = team
        TopSix.create({
          id,
          current_week,
          team_id,
          total,
          top_six
        })
          .then(() => {
            console.log('TopSix score is added to the db')
          })
      })
    } catch (err) {
      console.log('Error updating top_six\n', err)
    }
  }

  async getTotals() {
    try {
      const totals = {}
      for (let i = 1; i < 13; i++) {
        const winsRes = await TopSixes.count({
          where: {
            team_id: i,
            top_six: true
          }
        })

        const lossesRes = await TopSixes.count({
          where: {
            team_id: i,
            top_six: false
          }
        })

        totals[i] = {
          win: winsRes,
          loss: lossesRes
        }

      }

      return totals

    } catch (err) {
      console.log(err)
    }
  }

}

module.exports = TopSixService

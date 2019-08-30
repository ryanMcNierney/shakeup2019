const Yahoo = require('../auth/yahoo')
const { TopSix } = require('../../db/models')
const { default: PQueue } = require('p-queue')
const queue = new PQueue({ concurrency: 1 })

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
        const ts_id = current_week + '.' + team_id

        scores.push({
          ts_id,
          current_week: parseInt(current_week),
          team_id,
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
      const topSixArr = await this.clean()
      const topSixQueue = []

      topSixArr.forEach(team => {
        const topSixPromise = () => {
          return new Promise(resolve => {
            resolve(
              TopSix.create(team)
            )
          })
        }
        topSixQueue.push(topSixPromise)
      })

      const topSixes = await queue.addAll(topSixQueue)
      console.log(`Updated ${topSixes.length} rows into the top_sixes table`)

      return topSixes

    } catch (err) {
      console.log('Error updating top_six\n', err)
    }
  }

  async getTotals() {
    try {
      const totals = {}
      for (let i = 1; i < 13; i++) {
        const winsRes = await TopSix.count({
          where: {
            team_id: '' + i,
            top_six: true
          }
        })

        const lossesRes = await TopSix.count({
          where: {
            team_id: '' + i,
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

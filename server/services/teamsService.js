const Yahoo = require('../auth/yahoo')
const { Team } = require('../../db/models')
const { default: PQueue } = require('p-queue')
const queue = new PQueue({ concurrency: 1 })

class TeamsService {

  async clean() {
    const y = new Yahoo
    const data = await y.getTeams()
    const teamsArr = data.teams

    const teamsClean = teamsArr.map(team => {
      const { team_id, team_key, name, team_logos } = team
      const team_logo = team_logos[0]['url']

      return {
        team_id,
        team_key,
        name,
        team_logo
      }

    })

    return teamsClean

  }

  async updateDb() {
    const teamsArr = await this.clean()
    const teamsQueue = []

    teamsArr.forEach(team => {
      const teamsPromise = () => {
        return new Promise(resolve => {
          resolve(
            Team.update(team, {
              where: { team_id: team.team_id }
            })
          )
        })
      }
      teamsQueue.push(teamsPromise)
    })

    const teams = await queue.addAll(teamsQueue)

    console.log(`Updated ${teams.length} into the teams table`)
    return teams

  }

}

module.exports = TeamsService

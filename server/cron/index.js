const { TeamsService, TopSixService, StandingsService } = require('../services')
// dotenv
require('dotenv').config()

const updateTeams = async () => {
  const t = new TeamsService
  const res = await t.updateDb()
  return res
}

const updateTopSix = async () => {
  const ts = new TopSixService
  const res = await ts.updateDb()
  return res
}

const updateStandings = async () => {
  const s = new StandingsService
  const res = await s.updateDb()
  return res
}

(async () => {
  console.log('Cron update starting...')
  await updateTeams()
  console.log('Teams updated...')
  await updateTopSix()
  console.log('TopSix updated...')
  await updateStandings()
  console.log('Standings updated...')
  console.log('Cron update complete.')
  return
})()

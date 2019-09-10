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

const cronUpdate = async () => {
  console.log('Cron update starting...')
  await updateTeams()
  console.log('Teams updated...')
  await updateTopSix()
  console.log('TopSix updated...')
  await updateStandings()
  console.log('Standings updated...')
  console.log('Cron update complete.')
  return
}

// Heroku scheduler is running everday at 2:30a
// Only run if it is Tuesday
const d = new Date()
const day = d.getDay()
if (day === 2) {
  cronUpdate()
}


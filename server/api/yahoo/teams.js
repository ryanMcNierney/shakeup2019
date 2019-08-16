const router = require('express').Router()
const getYahooTeams = require('./utils')
const Yahoo = require('../../auth/yahoo')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const y = new Yahoo
    const accessToken = await y.getToken()
    // get yahoo team data
    const yahooTeamData = await getYahooTeams(accessToken)

    // check if credentials are expired
    if (yahooTeamData.description) {
      const newAccessToken = await y.refreshToken()
      const newYahooTeamData = await getYahooTeams(newAccessToken)
      res.send(newYahooTeamData)
    }
    res.send(yahooTeamData)
  } catch (err) {
    console.log(err)
  }
})

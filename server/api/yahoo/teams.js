const router = require('express').Router()
const YahooFantasy = require('yahoo-fantasy')
const Yahoo = require('../../auth/yahoo')
module.exports = router

const yf = new YahooFantasy(
  process.env.YAHOO_CLIENT_ID,
  process.env.YAHOO_CLIENT_SECRET
)

const y = new Yahoo

router.get('/', async (req, res) => {
  try {
    const accessToken = await y.getToken()
    await yf.setUserToken(accessToken)
    const data = await yf.league.teams(process.env.YF_LEAGUE_KEY)

    res.send(data)
  } catch (err) {
    console.log(err)
    try {
      const newAccessToken = await y.refreshToken()
      await yf.setUserToken(newAccessToken)
      const data = await yf.league.teams(process.env.YF_LEAGUE_KEY)

      res.send(data)
    } catch (error) {
      console.log('Another err', error)
      res.send(error)
    }
  }
})


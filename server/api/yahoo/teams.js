const router = require('express').Router()
// const YahooFantasy = require('yahoo-fantasy')
const Yahoo = require('../../auth/yahoo')
module.exports = router

const y = new Yahoo

router.get('/', async (req, res) => {
  try {
    const data = await y.getTeams()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

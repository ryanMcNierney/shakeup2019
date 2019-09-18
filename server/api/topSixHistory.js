const router = require('express').Router()
const { TopSixService, TeamsService } = require('../services')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const ts = new TopSixService
    const t = new TeamsService

    const topSixData = await ts.getAllDb()
    const teamsData = await t.getAllDb()
    const data = [topSixData, teamsData]

    res.send(data)

  } catch (err) {
    res.send(err)
  }
})

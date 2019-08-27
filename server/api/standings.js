const router = require('express').Router()
const StandingsService = require('../services/standingsService')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const s = new StandingsService
    const data = await s.get()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

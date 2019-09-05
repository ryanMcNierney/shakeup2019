const router = require('express').Router()
const { TopSixService } = require('../services')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const t = new TopSixService
    const data = await t.get()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

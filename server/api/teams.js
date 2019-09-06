const router = require('express').Router()
const { TeamsService } = require('../services')
module.exports = router

router.get('/:key', async (req, res) => {
  try {
    const t = new TeamsService
    const key = req.params.key
    if (key === process.env.KEY) {
      await t.clean()
      await t.updateDb()
      res.sendStatus(201)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    res.send(err)
  }
})

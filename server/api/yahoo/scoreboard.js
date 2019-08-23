const router = require('express').Router()
const Yahoo = require('../../auth/yahoo')
module.exports = router

const y = new Yahoo

router.get('/', async (req, res) => {
  try {
    const data = await y.getScoreboard()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

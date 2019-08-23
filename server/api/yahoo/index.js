const router = require('express').Router()
module.exports = router

router.use('/teams', require('./teams'))
router.use('/standings', require('./standings'))
router.use('/scoreboard', require('./scoreboard'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

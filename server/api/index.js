const router = require('express').Router()
module.exports = router

router.use('/yahoo', require('./yahoo'))
router.use('/standings', require('./standings'))
router.use('/top-six', require('./topSix'))
router.use('/teams', require('./teams'))
router.use('/top-six-history', require('./topSixHistory'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

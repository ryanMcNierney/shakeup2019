const router = require('express').Router()
module.exports = router

router.use('/yahoo', require('./yahoo'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

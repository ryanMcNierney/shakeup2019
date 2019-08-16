const router = require('express').Router()
const { Token } = require('../../db/models')
const Yahoo = require('../auth/yahoo')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const data = await Token.findOne({
      where: { id: 1 }
    })
    const { access_token } = data.dataValues
    res.send({ access_token })
  } catch (err) {
    console.log(err)
  }
})

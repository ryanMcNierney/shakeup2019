const router = require('express').Router()
const { Token } = require('../../db/models')
const axios = require('axios')
module.exports = router

router.get('/refresh', async (req, res) => {
  // // get refresh token
  // const tokenData = await Token.findOne({
  //   where: { id: 1 },
  //   attributes: ['refresh_token']
  // })
  // const refreshToken = tokenData.dataValues.refresh_token

  // // get new access token
  // const yahooResponse = await axios({
  //   method: 'post',
  //   url: 'https://api.login.yahoo.com/oauth2/get_token',
  //   auth: {
  //     username: process.env.YAHOO_CLIENT_ID,
  //     password: process.env.YAHOO_CLIENT_SECRET
  //   },
  //   data: {
  //     grant_type: 'refresh_token',
  //     redirect_uri: 'oob',
  //     refresh_token: refreshToken
  //   }
  // })

  // console.log('yahooResponse', yahooResponse)
})

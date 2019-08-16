const router = require('express').Router()
const { Token } = require('../../db/models')
const axios = require('axios')
const qs = require('qs')
module.exports = router

router.get('/refresh', async (req, res) => {
  try {
    // get new access token
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Credentials': true
      },
      auth: {
        username: process.env.YAHOO_CLIENT_ID,
        password: process.env.YAHOO_CLIENT_SECRET
      }
    }
    const data = {
      'grant_type': 'refresh_token',
      'redirect_uri': 'oob',
      'refresh_token': process.env.YAHOO_REFRESH_TOKEN
    }
    const refreshUrl = 'https://api.login.yahoo.com/oauth2/get_token'
    const yahooResponse = await axios.post(refreshUrl, qs.stringify(data), config)
    const { access_token, refresh_token } = yahooResponse.data

    // update the database
    await Token.update({ access_token, refresh_token }, {
      where: { id: 1 },
      returning: true,
      plain: true
    })

    // respond with new access_token
    res.send(access_token)
  } catch (err) {
    console.log(err)
  }
})

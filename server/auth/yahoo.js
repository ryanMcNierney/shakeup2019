const { Token } = require('../../db/models')
const axios = require('axios')
const qs = require('qs')
const { yfGetTeams } = require('./yf')

class Yahoo {
  async getToken() {
    const data = await Token.findOne({
      where: { id: 1 }
    })
    const { access_token } = data.dataValues
    return access_token
  }

  async refreshToken() {
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
      return access_token
    } catch (err) {
      console.log(err)
    }
  }

  async getTeams() {
    try {
      const data = await yfGetTeams(this.getToken, this.refreshToken)
      return data
    } catch (err) {
      return err
    }
  }
}

module.exports = Yahoo

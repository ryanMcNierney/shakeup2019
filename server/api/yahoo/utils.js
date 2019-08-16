const YahooFantasy = require('yahoo-fantasy')

const getYahooTeams = async (accessToken) => {
  try {
    const yf = await new YahooFantasy(
      process.env.YAHOO_CLIENT_ID,
      process.env.YAHOO_CLIENT_SECRET
    )

    await yf.setUserToken(accessToken)

    const teamData = await yf.league.teams('390.l.194587', (err, data) => {
      if (err) console.log(err)
      return data
    })

    return teamData
  } catch (err) {
    console.log(err)
  }
}

module.exports = getYahooTeams

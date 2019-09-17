const YahooFantasy = require('yahoo-fantasy')

const yf = new YahooFantasy(
  process.env.YAHOO_CLIENT_ID,
  process.env.YAHOO_CLIENT_SECRET
)

const yfGetTeams = async (getToken, refreshToken) => {
  try {
    const accessToken = await getToken()
    await yf.setUserToken(accessToken)
    const data = await yf.league.teams(process.env.YF_LEAGUE_KEY)
    return data
  } catch (err) {
    try {
      const newAccessToken = await refreshToken()
      await yf.setUserToken(newAccessToken)
      const data = await yf.league.teams(process.env.YF_LEAGUE_KEY)

      return data
    } catch (error) {
      console.log('Another err', error)
      return error
    }
  }
}

const yfGetStandings = async (getToken, refreshToken) => {
  try {
    const accessToken = await getToken()
    await yf.setUserToken(accessToken)
    const data = await yf.league.standings(process.env.YF_LEAGUE_KEY)
    return data
  } catch (err) {
    try {
      const newAccessToken = await refreshToken()
      await yf.setUserToken(newAccessToken)
      const data = await yf.league.standings(process.env.YF_LEAGUE_KEY)

      return data
    } catch (error) {
      console.log('Another err', error)
      return error
    }
  }
}

const yfGetScoreboard = async (getToken, refreshToken) => {
  try {
    const accessToken = await getToken()
    await yf.setUserToken(accessToken)
    const data = await yf.league.scoreboard(process.env.YF_LEAGUE_KEY)
    return data
  } catch (err) {
    try {
      const newAccessToken = await refreshToken()
      await yf.setUserToken(newAccessToken)
      const data = await yf.league.scoreboard(process.env.YF_LEAGUE_KEY)

      return data
    } catch (error) {
      console.log('Another err', error)
      return error
    }
  }
}

const yfGetLastWeekScoreboard = async (getToken, refreshToken, week) => {
  try {
    const accessToken = await getToken()
    await yf.setUserToken(accessToken)
    const data = await yf.league.scoreboard(process.env.YF_LEAGUE_KEY, week)
    return data
  } catch (err) {
    try {
      const newAccessToken = await refreshToken()
      await yf.setUserToken(newAccessToken)
      const data = await yf.league.scoreboard(process.env.YF_LEAGUE_KEY, week)
      return data
    } catch (err) {
      console.log('Another err', error)
    }
  }
}

module.exports = { yfGetTeams, yfGetStandings, yfGetScoreboard, yfGetLastWeekScoreboard }

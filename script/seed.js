const db = require('../db')
const { default: PQueue } = require('p-queue')
const queue = new PQueue({ concurrency: 1 })

const { Team, Standings, Token, TopSix } = require('../db/models')
// dotenv
require('dotenv').config()

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

  const teamsQueue = [
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '1',
          team_key: '390.l.194587.t.1',
          name: 'Kung Fritzy',
          team_logo: 'https://ct.yimg.com/cy/8090/29188850442_f245b4f655_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '2',
          team_key: '390.l.194587.t.2',
          name: '2 Dragons',
          team_logo: 'https://ct.yimg.com/cy/1773/29674476709_31a64c_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '3',
          team_key: '390.l.194587.t.3',
          name: 'Darnold’s Hair',
          team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_9.png'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '4',
          team_key: '390.l.194587.t.4',
          name: 'Harambe\'s Corn',
          team_logo: 'https://ct.yimg.com/cy/8643/29305599066_03cf30fcb8_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '5',
          team_key: '390.l.194587.t.5',
          name: 'Hoggy Dynasty',
          team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10.png'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '6',
          team_key: '390.l.194587.t.6',
          name: 'Marty Football',
          team_logo: 'https://ct.yimg.com/cy/1570/25209251052_25d811de11_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '7',
          team_key: '390.l.194587.t.7',
          name: 'Schuster Do’s',
          team_logo: 'https://ct.yimg.com/cy/1746/43820282554_d0c157_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '8',
          team_key: '390.l.194587.t.8',
          name: 'Sucker Free Sundays',
          team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_7.png'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '9',
          team_key: '390.l.194587.t.9',
          name: 'The Padres',
          team_logo: 'https://ct.yimg.com/cy/1955/56488870313_8e1af1_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '10',
          team_key: '390.l.194587.t.10',
          name: 'un-waiVering',
          team_logo: 'https://ct.yimg.com/cy/8292/28897690220_3fa95d26a3_192sq.jpg'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '11',
          team_key: '390.l.194587.t.11',
          name: 'Wiggle Wiggle',
          team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1.png'
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Team.create({
          team_id: '12',
          team_key: '390.l.194587.t.12',
          name: 'WIngyyy',
          team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_8.png'
        })
      )
    })
  ]

  const teams = await queue.addAll(teamsQueue)

  console.log(`seeded ${teams.length} into 'teams'`)

  const standingsQueue = [
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 1,
          team_id: '1',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 2,
          team_id: '2',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 3,
          team_id: '3',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 4,
          team_id: '4',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 5,
          team_id: '5',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 6,
          team_id: '6',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 7,
          team_id: '7',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 8,
          team_id: '8',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 9,
          team_id: '9',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 10,
          team_id: '10',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 11,
          team_id: '11',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    }),
    () => new Promise(resolve => {
      resolve(
        Standings.create({
          teamId: 12,
          team_id: '12',
          record: '0-0-0',
          win: 0,
          loss: 0,
          tie: 0,
          top_six_win: 0,
          top_six_loss: 0,
          total_win: 0,
          total_loss: 0,
          pts_for: 0,
          pts_against: 0
        })
      )
    })
  ]

  const standings = await queue.addAll(standingsQueue)

  console.log(`seeded ${standings.length} teams into 'standings'`)

  const tokens = await Promise.all([
    Token.create({
      access_token: process.env.YAHOO_ACCESS_TOKEN,
      refresh_token: process.env.YAHOO_REFRESH_TOKEN
    }),
  ])

  console.log(`seeded ${tokens.length} tokens into 'tokens'`)

  // const topSixesQueue = [
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 1,
  //         ts_id: '1.1',
  //         current_week: 1,
  //         team_id: '1',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 2,
  //         ts_id: '1.2',
  //         current_week: 1,
  //         team_id: '2',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 3,
  //         ts_id: '1.3',
  //         current_week: 1,
  //         team_id: '3',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 4,
  //         ts_id: '1.4',
  //         current_week: 1,
  //         team_id: '4',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 5,
  //         ts_id: '1.5',
  //         current_week: 1,
  //         team_id: '5',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 6,
  //         ts_id: '1.6',
  //         current_week: 1,
  //         team_id: '6',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 7,
  //         ts_id: '1.7',
  //         current_week: 1,
  //         team_id: '7',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 8,
  //         ts_id: '1.8',
  //         current_week: 1,
  //         team_id: '8',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 9,
  //         ts_id: '1.9',
  //         current_week: 1,
  //         team_id: '9',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 10,
  //         ts_id: '1.10',
  //         current_week: 1,
  //         team_id: '10',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 11,
  //         ts_id: '1.11',
  //         current_week: 1,
  //         team_id: '11',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   }),
  //   () => new Promise(resolve => {
  //     resolve(
  //       TopSix.create({
  //         teamId: 12,
  //         ts_id: '1.12',
  //         current_week: 1,
  //         team_id: '12',
  //         total: 0,
  //         top_six: false
  //       })
  //     )
  //   })
  // ]

  // const topSixes = await queue.addAll(topSixesQueue)

  // console.log(`seeded ${topSixes.length} tokens into 'top_sixes'`)

  console.log(`seeded successfully`)
}

const runSeed = async () => {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.log(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

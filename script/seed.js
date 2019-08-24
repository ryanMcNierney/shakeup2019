const db = require('../db')
const { Team, Standings } = require('../db/models')

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

  const teams = await Promise.all([
    Team.create({
      id: 1,
      team_id: '1',
      team_key: '390.l.194587.t.1',
      name: 'Kung Fritzy',
      team_logo: 'https://ct.yimg.com/cy/8090/29188850442_f245b4f655_192sq.jpg'
    }),
    Team.create({
      id: 2,
      team_id: '2',
      team_key: '390.l.194587.t.2',
      name: '2 Dragons',
      team_logo: 'https://ct.yimg.com/cy/1773/29674476709_31a64c_192sq.jpg'
    }),
    Team.create({
      id: 3,
      team_id: '3',
      team_key: '390.l.194587.t.3',
      name: 'Darnold’s Hair',
      team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_9.png'
    }),
    Team.create({
      id: 4,
      team_id: '4',
      team_key: '390.l.194587.t.4',
      name: 'Harambe\'s Corn',
      team_logo: 'https://ct.yimg.com/cy/8643/29305599066_03cf30fcb8_192sq.jpg'
    }),
    Team.create({
      id: 5,
      team_id: '5',
      team_key: '390.l.194587.t.5',
      name: 'Hoggy Dynasty',
      team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10.png'
    }),
    Team.create({
      id: 6,
      team_id: '6',
      team_key: '390.l.194587.t.6',
      name: 'Marty Football',
      team_logo: 'https://ct.yimg.com/cy/1570/25209251052_25d811de11_192sq.jpg'
    }),
    Team.create({
      id: 7,
      team_id: '7',
      team_key: '390.l.194587.t.7',
      name: 'Schuster Do’s',
      team_logo: 'https://ct.yimg.com/cy/1746/43820282554_d0c157_192sq.jpg'
    }),
    Team.create({
      id: 8,
      team_id: '8',
      team_key: '390.l.194587.t.8',
      name: 'Sucker Free Sundays',
      team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_7.png'
    }),
    Team.create({
      id: 9,
      team_id: '9',
      team_key: '390.l.194587.t.9',
      name: 'The Padres',
      team_logo: 'https://ct.yimg.com/cy/1955/56488870313_8e1af1_192sq.jpg'
    }),
    Team.create({
      id: 10,
      team_id: '10',
      team_key: '390.l.194587.t.10',
      name: 'un-waiVering',
      team_logo: 'https://ct.yimg.com/cy/8292/28897690220_3fa95d26a3_192sq.jpg'
    }),
    Team.create({
      id: 11,
      team_id: '11',
      team_key: '390.l.194587.t.11',
      name: 'Wiggle Wiggle',
      team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1.png'
    }),
    Team.create({
      id: 12,
      team_id: '12',
      team_key: '390.l.194587.t.12',
      name: 'WIngyyy',
      team_logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_8.png'
    })
  ])

  console.log(`seeded ${teams.length} teams`)

  const standings = await Promise.all([
    Standings.create({
      id: 1,
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
    }),
    Standings.create({
      id: 2,
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
    }),
    Standings.create({
      id: 3,
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
    }),
    Standings.create({
      id: 4,
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
    }),
    Standings.create({
      id: 5,
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
    }),
    Standings.create({
      id: 6,
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
    }),
    Standings.create({
      id: 7,
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
    }),
    Standings.create({
      id: 8,
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
    }),
    Standings.create({
      id: 9,
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
    }),
    Standings.create({
      id: 10,
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
    }),
    Standings.create({
      id: 11,
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
    }),
    Standings.create({
      id: 12,
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
  ])

  console.log(`seeded ${standings.length} teams into standings`)

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

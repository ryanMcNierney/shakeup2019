const db = require('../db')
const { Team, Token } = require('../db/models')

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

  const tokens = await Promise.all([
    Token.create({
      id: 1,
      access_token: 'j41E3vKZvQ85kLdepdQlfTLnTenBrgdvq8pHRxE78BSfiedzftBi96YSiiEgcNnxOt1.q5l49HK3pUCwXE0KcWJr.0Zgh7xY6EhCXNA401nf55gY5zAGN8qmmVr5UnzIRRq2s6kfQ6jjBVCiWs0gqzZKOhDqRyuBrLOB.Su25DshKxCojixVMv2DqiBJtoQraGIjDXeFX8GgaqG5llAvTYLw8LWYNAqVCdWpXIbqnGE9rl52zZxCcMGHKOs9jwb5mE4ygbr9F7LDrznyLFmU2dXxiONTBAdYiZ1JLP9CzSL37FdnL.skoCHN1tJNE_9QBOdC7VV8gTmcVxe1.UIqElc2WIUPMSxEbR.6Tfxh4LAXVG8GG5ifUD4V8dAX5r6ffUB.3yYbGM.Tr7Il13rPkDspR2wFvCGTm6Wm.TTm9vmaKyerrIutP.ew_AxMfL8jppkBUXJMOqN6OSomh_qQ3k5cT9S1bTBTH42HFhOByoUwTKDItks4sbiDn6qbolKcrHfDHUZRNNASW66O.KSnp81zEYBwrI8.9XSI6GjkJ4gQFOhcoYbZCm.zzIadfTYutM8lFI2F4EmFxcB3v5.VIO5YpTzOTlN4.4e2.gok1i0qQYxU6Wx3U0L8xPWsu4NkYqS9ODYuxalsoH8d7exfwwof12iWDdGFYHJBol5.k29raMlUNtYbY4PUKgrcLp859DM2gTGuMEPMybmWf6wKZk2xgaA7ibYfHH3Mc4Pae98HDW9wsQC_vDbeo7RHNXLNReT80PMh5g709cQVkgNePRrCsnNwCFG31B8XVgiSzO5v0XxGcJ0C9F3PGUoWnEznjjEaAyKLCgsmkdD7Yo9qYD42GJ.DMIYb.f4tl43OQE7RdiICVqtNb4sYaRW7P08Bh.89uMo1dTqtW8_WFIB9NSwGRPCipX94ek.IgmJqB8A5W6xAmWb7TDcmVfr17e6fRJtT0wlAZ.wRgHIPO_l_VaO05x380YLQzrmtHR.n3qKtPnvoqkA8qu2jVlv9UuRfBdTNDdvgue6N5sAxQkAiUXMrU.SDp6rYATvt0FQ2CtXDTQzfOF1mia1DOqBfwil1aH.4tw--',
      refresh_token: 'APgTUl3ttzPHMBlplH5sgKasr3XnV4qt_Cudiw7Tl1LyOMU-'
    })
  ])

  console.log(`seeded ${tokens.length} tokens`)

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

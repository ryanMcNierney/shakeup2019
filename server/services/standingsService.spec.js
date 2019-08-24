const { expect } = require('chai')
const request = require('supertest')
const Standings = require('./standingsService')

describe('Standings Class function', () => {

  describe('Standings.clean()', () => {
    it('should be a function', async () => {
      const s = new Standings
      expect(s.clean).to.be.a('function')
    })

  }) // end describe('Standings.clean()')


}) // end describe('Standings Class function')

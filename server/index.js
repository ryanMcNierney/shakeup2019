const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const db = require('../db')
const PORT = process.env.PORT || 3000

// dotenv
require('dotenv').config()

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// routing
app.use('/api', require('./api'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// sync database
const syncDb = () => db.sync() // { force: true } for testing

// start listening
app.listen(PORT, async () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`App listening on port ${PORT} in development!`)
    await syncDb()
    console.log('db synced...')
  } else {
    console.log(`App listening on port ${PORT}!`)
    await syncDb()
    console.log('db synced...')
  }
})

const express = require('express')
const cors = require('cors')
// const allowedOrigins = ['http://localhost:3000']

// express + middlewares
const EXPRESS_URL = '/api/notes'
const app = express()
app.use(express.json())
// app.use(cors({origin: allowedOrigins}))
app.use(cors())
app.use(express.static('build'))

module.exports = { app, EXPRESS_URL }

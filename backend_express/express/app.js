const express = require('express')
const cors = require('cors')
// const allowedOrigins = ['http://localhost:3000']

// express + middlewares
const EXPRESS_URL_NOTES = '/api/notes'
const EXPRESS_URL_LOGIN = '/api/login'
const app = express()
app.use(express.json())
// app.use(cors({origin: allowedOrigins}))
app.use(cors())
app.use(express.static('build'))

module.exports = { app, EXPRESS_URL_NOTES, EXPRESS_URL_LOGIN }

const express = require('express')
const cors = require('cors')
const { mongoDisconnect } = require('./database/index')
const { notesController, usersController } = require('./controllers/index')

const app = express()
app.use(express.json())
// const allowedOrigins = ['http://localhost:3000']
// app.use(cors({origin: allowedOrigins}))
app.use(cors())
app.use(express.static('client_build'))

app.use('/api/notes', notesController)
app.use('/api/login', usersController)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
    console.log(`express listening to port ${PORT}`)
})

process.on('SIGTERM', () => {
    server.close(() => {
        mongoDisconnect() // close MongoDB connection
        console.log('Process terminated. MongoDB connection closed.')
    })
})

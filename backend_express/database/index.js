require('dotenv').config();
const mongoose = require('mongoose')
const Note = require('./models/noteModel')
const User = require('./models/userModel')
const MONGO_URL = process.env.MONGO_URL

mongoose.set('strictQuery',false)

mongoose.connect(MONGO_URL)
    .then((result) => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const mongoDisconnect = () => {
    mongoose.connection.close()
}

module.exports = {
    Note,
    User,
    mongoDisconnect
}

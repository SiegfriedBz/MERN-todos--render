require('dotenv').config();
const mongoose = require('mongoose')

// mongo db connect
const MONGO_URL = process.env.MONGO_URL
mongoose.set('strictQuery',false)

mongoose.connect(MONGO_URL)
    .then((result) => {
        console.log(console.log('connected to MongoDB'))
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

// * USERS
// mongo db users collection
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

// * NOTES
// mongo db notes collection
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// * Disconnect
const mongoDisconnect = () => {
    mongoose.connection.close()
}

module.exports = {
    User: mongoose.model('User', userSchema),
    Note: mongoose.model('Note', noteSchema),
    mongoDisconnect
}

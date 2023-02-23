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

const mongoDisconnect = () => {
    mongoose.connection.close()
}

module.exports = {
    Note: mongoose.model('Note', noteSchema),
    mongoDisconnect
}

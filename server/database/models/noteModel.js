const mongoose = require('mongoose')
const noteSchema = require('../schemas/noteSchema')

const Note = mongoose.model('Note', noteSchema)

module.exports = Note

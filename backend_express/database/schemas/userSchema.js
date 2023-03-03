const { Schema } = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String
})

module.exports = userSchema

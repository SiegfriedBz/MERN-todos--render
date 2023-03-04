const express = require('express')
const usersController = express.Router()
const { User } = require('../database/index')
const { LOGIN_ENDPOINT } = require('./constants')

// usersController.post(LOGIN_ENDPOINT, (req, resp) => {
//     const { body: user } = req
//     console.log('user', user)
//     const newUser = new User(user)
//     newUser
//         .save()
//         .then((user) => {
//             if(user) {
//                 console.log(user)
//                 // status created
//                 resp.sendStatus(201)
//             }
//         })
//         .catch((error) => {
//             console.error(error)
//             // internal server error
//             resp.sendStatus(500)
//         })
// })

module.exports = { usersController }

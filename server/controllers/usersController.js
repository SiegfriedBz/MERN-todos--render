const express = require('express')
const usersController = express.Router()
const { User } = require('../database/index')
const { EXPRESS_URL_LOGIN } = require('./constants')

// usersController.post(EXPRESS_URL_LOGIN, (req, resp) => {
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

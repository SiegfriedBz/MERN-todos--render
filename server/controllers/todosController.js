const express = require('express')
const todosController = express.Router()
const { Todo } = require('../database/index')
const { TODOS_ENDPOINT } = require('./constants')

// index
todosController.get(TODOS_ENDPOINT, async (req, resp) => {
    try {
        const todos = await Todo.find({})
        if (todos) {
            // OK
            resp.status(200).json(todos)
        } else {
            // resource not found
            resp.sendStatus(404)
        }
    } catch (error) {
        console.error(`fetching todos thrown an error: ${error}`)
        resp.sendStatus(500)
    }
})

// create
todosController.post(TODOS_ENDPOINT, async (req, resp) => {
    try{
        const { body } = req
        const newTodo = new Todo(body)
        const savedNewTodo = await newTodo.save()
        if(savedNewTodo) {
            // status created
            resp.status(201).json(savedNewTodo)
        } else {
            throw new Error('new todo was not saved')
        }
    } catch(error) {
        console.error(`create todo thrown an error: ${error}`)
        resp.sendStatus(500)
    }
})

// update
todosController.patch(`${TODOS_ENDPOINT}/:id`, async (req, resp) => {
    try {
        const {params: {id}, body} = req
        const todo = await Todo.findById(id)
        if(todo) {
            const updatedNote = await Todo.findOneAndUpdate(
                {_id: id},
                {content: body.content, important: body.important},
                {new: true} // to get the updated todo returned
            )
            resp.status(200).json(updatedNote)
        } else {
            // status resource not found
            resp.sendStatus(404)
        }
    } catch(error) {
        console.error(`update note thrown an error: ${error}`)
        resp.sendStatus(500)
    }
})

// delete
todosController.delete(`${TODOS_ENDPOINT}/:id`, async (req, resp) => {
    try {
        const { params: { id } } = req
        const todo = await Todo.findById(id)
        if(todo) {
            await Todo.findOneAndDelete({ _id: id })
            // status success w/ no data to return
            resp.sendStatus(204)
        } else {
            // status resource not found
            resp.sendStatus(404);
        }
    } catch(error) {
        console.error(`delete note thrown an error: ${error}`)
        resp.sendStatus(500)
    }
})

module.exports = { todosController }

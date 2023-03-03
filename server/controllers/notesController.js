const express = require('express')
const notesController = express.Router()
const { Note } = require('../database/index')
const { EXPRESS_URL_NOTES } = require('./constants')

// index
notesController.get(EXPRESS_URL_NOTES, async (req, resp) => {
    try {
        const notes = await Note.find({})
        if (notes) {
            // OK
            resp.status(200).json(notes)
        } else {
            // resource not found
            resp.sendStatus(404)
        }
    } catch (error) {
        console.error(`fetching notes thrown on error: ${error}`)
        resp.sendStatus(500)
    }
})

// create
notesController.post(EXPRESS_URL_NOTES, async (req, resp) => {
    try{
        let { body: { note } } = req
        const newNote = new Note(note)
        const savedNewNote = await newNote.save()
        if(savedNewNote) {
            // status created
            resp.status(201).json(savedNewNote)
        } else {
            throw new Error('new note was not saved')
        }
    } catch(error) {
        console.error(`create note thrown on error: ${error}`)
        resp.sendStatus(500)
    }
})

// update
notesController.patch(`${EXPRESS_URL_NOTES}/:id`, async (req, resp) => {
    try {
        const {params: {id}, body} = req
        const note = await Note.findById(id)
        if(note) {
            const updatedNote = await Note.findOneAndUpdate(
                {_id: id},
                {important: body.important},
                {new: true} // to get the updated note returned
            )
            resp.status(200).json(updatedNote)
        } else {
            // status resource not found
            resp.sendStatus(404)
        }
    } catch(error) {
        console.error(`update note thrown on error: ${error}`)
        resp.sendStatus(500)
    }
})

// delete
notesController.delete(`${EXPRESS_URL_NOTES}/:id`, async (req, resp) => {
    try {
        const { params: { id } } = req
        const note = await Note.findById(id)
        if(note) {
            await Note.findOneAndDelete({ _id: id })
            // status success w/ no data to return
            resp.sendStatus(204)
        } else {
            // status resource not found
            resp.sendStatus(404);
        }
    } catch(error) {
        console.error(`delete note thrown on error: ${error}`)
        resp.sendStatus(500)
    }
})

module.exports = { notesController }

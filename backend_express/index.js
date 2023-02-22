const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
// const allowedOrigins = ['http://localhost:3000']

const app = express()
app.use(express.json())
// app.use(cors({origin: allowedOrigins}))
app.use(cors())
app.use()

let notes = [
    { id: '1', content: 'note from express', important: true }
]

const BASE_URL = '/api/notes'

// index
app.get(BASE_URL, (req, res) => {
    res.status(200).json(notes)
})

// // show
// app.get(`${BASE_URL}/:id`, (req, res) => {
//     const { params: { id } } = req
//     const note = notes.find(n => n.id === id)
//     if (note) {
//         res.status(200).json(note)
//     } else {
//         res.sendStatus(404)
//     }
// })

// create
app.post(`${BASE_URL}`, (req, res) => {
    let { body: { note: newNote } } = req
    newNote = {...newNote, id: uuidv4() }
    notes = [...notes, newNote]
    // status created
    res.status(201).json(newNote)
})

// update
app.patch(`${BASE_URL}/:id`, (req, res) => {
    const { params: { id }, body } = req
    const note = notes.find(n => n.id === id)
    if (note) {
        const updatedNote = {...note, ...body}
        notes = notes.map(n => n.id !== id ? n : updatedNote)
        res.status(200).json(updatedNote)
    } else {
        // status resource not found
        res.sendStatus(404)
    }
})

// delete
app.delete(`${BASE_URL}/:id`, (req, res) => {
    const { params: { id } } = req
    const note = notes.find(n => n.id === id)
    if (note) {
        notes = notes.filter(n => n.id !== id)
        // status success w/ no data to return
        res.sendStatus(204);
    } else {
        // status resource not found
        res.sendStatus(404);
    }
})

// error
// app.get(`${BASE_URL}/404`, (req, res) => {
//     res.send(`
//         <h1>oups...page not found</h1>
//     `)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`express listening to port ${PORT}`)
})
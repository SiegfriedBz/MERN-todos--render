const { app, EXPRESS_URL } = require('./express')
const { Note, mongoDisconnect } = require('./mongo_db/models')

// index
app.get(EXPRESS_URL, (req, resp) => {
    Note
        .find({})
        .then(notes => {
            // status OK
            resp.status(200).json(notes)
        })
})

// create
app.post(EXPRESS_URL, (req, resp) => {
    let { body: { note } } = req
    const newNote = new Note({
        note
    })
    newNote
        .save()
        .then(savedNote => {
            // status created
            resp.status(201).json(savedNote)
        })
})

// update
app.patch(`${EXPRESS_URL}/:id`, (req, res) => {
    const { params: { id }, body } = req
    const note = Note.findById(id)
    if(note){
        Note.findOneAndUpdate(
            { _id: id },
            { important: body.important },
            (err, updatedNote) => {
                if (err) throw err;
                res.status(200).json(updatedNote)
            }
        )
    } else {
        // status resource not found
        res.sendStatus(404)
    }
})

// delete
app.delete(`${EXPRESS_URL}/:id`, (req, res) => {
    const { params: { id } } = req
    const note = Note.findById(id)
    if (note) {
        Note.findOneAndDelete(
            { _id: id },
            (err, deletedNote) => {
                if (err) throw err;
                // status success w/ no data to return
                res.sendStatus(204);
            }
        );
    } else {
        // status resource not found
        res.sendStatus(404);
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`express listening to port ${PORT}`)
})

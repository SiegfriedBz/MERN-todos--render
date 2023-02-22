import { useState, useEffect } from 'react'
import  { getNotes, addNote, updateNote, deleteNote } from './services/noteService'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Notes from './components/Notes'
import AddNote from "./components/AddNote";

function App() {
    const [notes, setNotes] = useState([])
    const [showAllNotes, setShowAllNotes] = useState(true)

    useEffect(() => {
        (async () => {
            const notes = await getNotes()
            setNotes(notes)
        })()
    }, [])

    const notesToShow = showAllNotes ? notes : notes.filter(n => n.important)

    const handleAdd = async(note) => {
        const newNote = await addNote(note)
        setNotes([...notes, newNote])
    }

    const handleUpdate = async (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}
        const updatedNote = await updateNote(id, changedNote)
        setNotes(notes.map(n => n.id !== id ? n : updatedNote))
    }

    const handleDelete = async (id) => {
        await deleteNote(id)
        setNotes(notes.filter(n => n.id !== id))
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <Notes
                    notesToShow={notesToShow}
                    showAllNotes={showAllNotes}
                    setShowAllNotes={setShowAllNotes}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
                <AddNote handleAdd={handleAdd} />
            </div>
            <Footer />
        </>
    );
}

export default App;

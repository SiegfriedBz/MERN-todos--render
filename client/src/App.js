import { useState, useEffect } from 'react'
import useNotesService from './services/useNotesService'
import login from './services/loginService'
import Notification from './components/shared/Notification'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Notes from './components/Notes'
import AddNote from "./components/AddNote"
import Login from './components/Login'

function App() {
    const [
        notes,
        getNotes,
        getNote,
        addNote,
        updateNote,
        deleteNote,
        errorMessage
    ] = useNotesService()

    const [showAllNotes, setShowAllNotes] = useState(true)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        (async () => {
            await getNotes()
        })()
    }, [])

    const handleAdd = async(note) => {
        await addNote(note)
    }

    const handleUpdate = (id, changedNote={}) => {
        let note = notes.find(n => n.id === id)
    }

    const handleToggleImportant = async (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}
        await toggleImportant(id, changedNote)
    }

    const handleDelete = async (id) => {
        await deleteNote(id)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(user)
        console.log('logging in with', user.username, user.password)
    }

    const notesToShow = showAllNotes ? notes : notes.filter(n => n.important)

    return (
        <>
            <Navbar />
            <div className="container">
                <Notification message={errorMessage}/>
                <Login
                    handleLogin={handleLogin}
                    user={user}
                    setUser={setUser}
                />
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

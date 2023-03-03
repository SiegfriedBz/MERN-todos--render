import { useState } from 'react'

import { EXPRESS_URL_NOTES } from './expressUrl'

export default function useNotesService() {
    const [notes, setNotes] = useState([{id: 1, content: 'first note', important: true}])
    const [errorMessage, setErrorMessage] = useState(undefined)

    const fetchOptions = (method, data = {}) => {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }}
        if (method !== 'DELETE') {
            options.body = JSON.stringify(data)
        }
        return options
    }

    const getNotes = async () => {
        try {
            const response = await fetch(EXPRESS_URL_NOTES)
            if (response.status === 200) {
                const notes = await response.json()
                setNotes(notes)
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            console.error(`getNotes thrown an error: ${error}`)
        }
    }

    const getNote = async (id) => {
        try {
            const response = await fetch(`${EXPRESS_URL_NOTES}/${id}`)
            if (response.status === 200) {
                const fetchedNote = await response.json()
                setNotes(notes.map(note => note.id !== id ? note : fetchedNote))
            } else {
                throw new Error(`${response.status}`)
            }
        } catch(error) {
            console.error(`getNote thrown an error: ${error}`)
        }
    }

    const addNote = async (note) => {
        try {
            const response = await fetch(EXPRESS_URL_NOTES, fetchOptions("POST", note))
            if (response.status === 201) {
                const newNote = await response.json()
                setNotes([...notes, newNote])
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            setErrorMessage(`Note '${note.content}' was not created`)
            setTimeout(() => {
                setErrorMessage(undefined)
            }, 2500)
            console.error(`addNote thrown an error: ${error}`)
        }
    }

    const updateNote = async (id, changedNote) => {
        try {
            const response = await fetch(`${EXPRESS_URL_NOTES}/${id}`, fetchOptions("PATCH", changedNote))
            if (response.status === 200) {
                const updatedNote = await response.json()
                setNotes(notes.map(n => n.id !== id ? n : updatedNote))
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            if (error === '404') {
                setNotes(notes.filter(n => n.id !== id))
                setErrorMessage(
                    `Note '${changedNote.content}' was previously deleted and could not be updated`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            } else {
                setErrorMessage(
                    `Note '${changedNote.content}' was not updated'`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)

            }
            console.error(`updateNote thrown an error: ${error}`)
        }
    }

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${EXPRESS_URL_NOTES}/${id}`, fetchOptions("DELETE"))
            if (response.status === 204) {
                setNotes(notes.filter(n => n.id !== id))
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            if(error === '404') {
                setNotes(notes.filter(n => n.id !== id))
                setErrorMessage(
                    `Note was previously deleted`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            } else {
                setErrorMessage(
                    `Note was not deleted`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            }
            console.error(`deleteNote thrown an error: ${error}`)
        }
    }

    return  [
        notes,
        getNotes,
        getNote,
        addNote,
        updateNote,
        deleteNote,
        errorMessage
    ]
}

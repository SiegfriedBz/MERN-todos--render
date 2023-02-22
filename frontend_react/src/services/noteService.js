const EXPRESS_URL = '/api/notes'

const getNotes = async () => {
    try {
        const response = await fetch(EXPRESS_URL)
        const notes = await response.json()
        return notes
    } catch(error) {
        console.log(error)
    }
}

const addNote = async (note) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }
    try {
        const response = await fetch(EXPRESS_URL, fetchOptions)
        if(response.status === 201) {
            const newNote = await response.json()
            return newNote
        } else {
            console.log(response.status)
        }
    } catch(error) {
        console.log(error)
    }
}

const updateNote = async (id, changedNote) => {
    const fetchOptions = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changedNote)
    }
    try {
        const response = await fetch(`${EXPRESS_URL}/${id}`, fetchOptions)
        if(response.status === 200) {
            const updatedNote = await response.json()
            return updatedNote
        } else {
            console.log(response.status)
        }
    } catch(error) {
        console.log(error)
    }
}

const deleteNote = async (id) => {
    const fetchOptions = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${EXPRESS_URL}/${id}`, fetchOptions)
        if(response.status === 204){
            return
        } else {
            console.log(response.status)
        }
    } catch(error) {
        console.log(error)
    }
}

export { getNotes, addNote, updateNote, deleteNote }

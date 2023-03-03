import { useState } from "react"
import Button from './shared/Button'

const AddNote = ({ handleAdd }) => {
    const initNote = { content: "", important: false }
    const [note, setNote] = useState(initNote);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        console.log(name, value, type, checked)
        setNote({...note, [name]: type !== 'checkbox' ? value : !checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(note.content) {
            handleAdd({note})
            setNote(initNote)
        } else {
            alert('content can not be empty')
        }
    }

    return (
        <>
            <h1>Add note</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control w-25"
                        name="content"
                        value={note.content}
                        onChange={handleChange}
                        placeholder="Enter content" />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        namme="important"
                        checked={note.important}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="important">Mark as important</label>
                </div>
                <Button
                    className='button'
                    type="submit"
                >Submit</Button>
            </form>
        </>
    )
}

export default AddNote

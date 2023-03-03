import { useState } from 'react'
import clsx from 'clsx';
import Button from './shared/Button'
import EditNote from "./EditNote";

const Note = ({note, handleUpdate, handleDelete}) => {
    const [ changedNote, setChangedNote ] = useState({})
    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ toggleIsDisabled, setToggleIsDisabled] = useState(false)

    const importantIconClass = clsx('fa-solid fa-circle-exclamation', {
        'text-warning': note.important
    })

    const handleChange = (e) => {
        setChangedNote({
            ...note,
            content: e.target.value
        })
    }

    const handleToggle = () => {
        setChangedNote({
            ...note,
            important: !note.important
        })
        setToggleIsDisabled(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (note.content || changedNote.content) {
            await handleUpdate(changedNote)
            setIsEditMode(false)
        } else {
            alert('content can not be empty')
        }
    }

    const [ noteContent, noteEditBtn ] = isEditMode
        ? ([
            <EditNote
                note={note}
                changedNote={changedNote}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            , null
            ]
        )
        : ([
            <span className='me-1'>note.content</span>
            , <Button
                className='btn btn-sm btn-outline-success ms-1'
                onClick={() => setIsEditMode(true)}
            >
                Edit Note
            </Button>
        ])

        return (
            <li>
                <div className="d-flex align-items-center">
                    {noteContent}
                    <Button
                        onClick={handleToggle}
                        disabled={toggleIsDisabled}
                        className='border-0 bg-transparent'>
                            <i className={importantIconClass}></i>
                    </Button>
                    <Button
                        className='btn btn-sm'
                        onClick={() => handleDelete(note.id)}
                    >
                        <i className="fa-solid fa-trash-can text-danger"></i>
                    </Button>
                    {noteEditBtn}
                </div>
            </li>
        )
}

export default Note

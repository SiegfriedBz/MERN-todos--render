import Note from './Note'
import Button from './shared/Button'
import clsx from 'clsx'

const Notes = ({
                   notesToShow,
                   showAllNotes,
                   setShowAllNotes,
                   handleUpdate,
                   handleDelete }) => {

    const toggleShowAllNotesIconClass = clsx('fa-solid', {
        "fa-toggle-off": showAllNotes,
        "fa-toggle-on text-warning": !showAllNotes
    })

    return (
        <>
            <h1>Notes</h1>
            <div className='d-flex'>
                <Button
                    className='border-0 bg-transparent'
                    onClick={() => setShowAllNotes(prev => !prev)}
                >
                    <i className={toggleShowAllNotesIconClass} >< /i>
                </Button>
                <span>Show important notes</span>
            </div>
            {notesToShow &&
                <ul>
                    {notesToShow.map(note => {
                            return (
                                <Note
                                    key={note.id}
                                    note={note}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                />
                            )
                        }
                    )}
                </ul>
            }
        </>
    )
}

export default Notes

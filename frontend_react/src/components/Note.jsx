import clsx from 'clsx';
import Button from './shared/Button'

const Note = ({ note, handleUpdate, handleDelete }) => {
    const { id, content, important } = note

    const importantIconClass = clsx('fa-solid fa-circle-exclamation', {
        'text-warning': important
    })

    return (
        <li>
            <div className="d-flex align-items-center">
                {content}
                <Button
                    className='border-0 bg-transparent'
                    onClick={() => handleUpdate(id)}>
                    <i className={importantIconClass}></i>
                </Button>
                <Button
                    className='btn btn-sm'
                    onClick={() => handleDelete(id)}
                >
                    <i className="fa-solid fa-trash-can text-warning"></i>
                </Button>
            </div>
        </li>
    )
}

export default Note

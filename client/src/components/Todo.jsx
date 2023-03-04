import { useState } from 'react'
import clsx from 'clsx';

const Todo = ({todo, handleUpdate, handleDelete}) => {
    const [changedTodo, setChangedTodo] = useState(todo)
    const [iconUpdateRotate, setIconUpdateRotate] = useState(false)

    const iconIsImportantClass = clsx('fa-solid fa-circle-exclamation', {
        'icon-important-yellow': changedTodo.important
    })

    const iconUpdateClass = clsx('fa-solid fa-arrows-rotate', {
        'icon-update-green': true,
        'icon-rotate': iconUpdateRotate
    })

    const iconDeleteClass = clsx('fa-solid fa-trash-can', {
        'icon-delete-yellow': true
    })

    const toggleImportant = () => {
        setChangedTodo({...changedTodo,
            important: !changedTodo.important
        })
    }

    const handleChange = (e) => {
        setChangedTodo({
            ...changedTodo, content: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        console.log('in handleSubmit')
        e.preventDefault()
        setIconUpdateRotate(true)
        await handleUpdate(todo.id, changedTodo)
        setIconUpdateRotate(false)
    }

    return (
        <li>
            <div className="update-todo-container"
            >
                <div className='update-todo-form'>
                    <input
                        className='content'
                        value={changedTodo.content}
                        onChange={handleChange}
                    />
                    <span
                        className='important'
                        onClick={toggleImportant}
                    >
                        <i className={iconIsImportantClass}></i>
                    </span>
                </div>
                <span
                    className='update'
                    onClick={handleSubmit}
                >
                    <i className={iconUpdateClass}></i>
                </span>
                <span className='delete'
                    onClick={() => handleDelete(changedTodo.id)}
                >
                    <i className={iconDeleteClass}></i>
                </span>
            </div>
        </li>
    )
}

export default Todo

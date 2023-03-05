import { useState } from 'react'
import clsx from 'clsx';

const Todo = ({todo, handleUpdate, handleDelete}) => {
    const [changedTodo, setChangedTodo] = useState(todo)
    const [iconRotate, setIconRotate] = useState(false)

    const handleChangeImportant = () => {
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
        e.preventDefault()
        setIconRotate(true)
        await handleUpdate(todo.id, changedTodo)
        setIconRotate(false)
    }

    const spanImportantClass = clsx('input-important', {
        'important': changedTodo.important
    })

    const iconUpdateClass = clsx('fa-solid fa-arrows-rotate', {
        'rotate': iconRotate
    })

    return (
            <div className="todo-wrapper update-todo"
            >
                <div className='input-wrapper update-todo'>
                    <input
                        className='input-content'
                        value={changedTodo.content}
                        onChange={handleChange}
                    />
                    <span
                        className={spanImportantClass}
                        onClick={handleChangeImportant}
                    >
                        <i className='fa-solid fa-circle-exclamation'></i>
                    </span>
                </div>
                <div className='btn-wrapper'>
                    <span
                        className='update'
                        onClick={handleSubmit}
                    >
                        <i className={iconUpdateClass}></i>
                    </span>
                    <span className='delete'
                          onClick={() => handleDelete(changedTodo.id)}
                    >
                        <i className='fa-solid fa-trash-can'></i>
                    </span>
                </div>
            </div>
    )
}

export default Todo

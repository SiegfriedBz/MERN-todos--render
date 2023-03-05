import { useState } from "react"
import clsx from 'clsx'
import Button from './shared/Button'

const AddTodo = ({ handleAdd }) => {
    const initTodo = { content: "", important: false }
    const [todo, setTodo] = useState(initTodo);

    const handleChange = (e) => {
        const { name, value } = e.target
        setTodo({...todo, [name]: value })
    }

    const handleChangeImportant = () => {
        const newVal = !todo.important
        setTodo({...todo, important: newVal })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.content) {
            handleAdd(todo)
            setTodo(initTodo)
        } else {
            alert('content can not be empty')
        }
    }

    const spanImportantClass = clsx('input-important', {
        'important': todo.important
    })

    return (
        <form
            className='todo-wrapper'
            onSubmit={handleSubmit}
        >
            <div className='input-wrapper add-todo'>
                <input
                    className='input-content'
                    type="text"
                    name="content"
                    value={todo.content}
                    onChange={handleChange}
                    placeholder="Enter todo..." />
                <span
                    className={spanImportantClass}
                    onClick={handleChangeImportant}
                >
                    <i className='fa-solid fa-circle-exclamation'></i>
                </span>
            </div>
                <Button
                    className='btn-save'
                    type="submit"
                >
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                </Button>
        </form>
    )
}

export default AddTodo

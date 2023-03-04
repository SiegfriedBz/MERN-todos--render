import { useState } from "react"
import clsx from 'clsx'
import Button from './shared/Button'

const AddTodo = ({ handleAdd }) => {
    const initTodo = { content: "", important: false }
    const [todo, setTodo] = useState(initTodo);
    const [inputIsChecked, setInputIsChecked] = useState(false)

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        setInputIsChecked(checked)
        setTodo({...todo, [name]: type === 'text' ? value : !todo.important})
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

    const checkboxLabelClass = clsx('input-checkbox-label', {
        'is-checked': inputIsChecked,
        'is-not-checked': !inputIsChecked
    })

    return (
        <form
            id='form-add-todo'
            onSubmit={handleSubmit}>
                <input
                    className='input-content'
                    type="text"
                    name="content"
                    value={todo.content}
                    onChange={handleChange}
                    placeholder="Enter todo..." />
                <input
                    className='input-important'
                    type="checkbox"
                    name="important"
                    checked={todo.important}
                    onChange={handleChange}
                />
                <label
                    className={checkboxLabelClass}
                    htmlFor="important"
                >
                    Important
                </label>
            <Button
                className='button'
                type="submit"
            >Add</Button>
        </form>
    )
}

export default AddTodo

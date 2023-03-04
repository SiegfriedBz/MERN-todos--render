import { useState } from 'react'
import { TODOS_ENDPOINT } from './constants'

export default function useTodoService() {
    const [todos, setTodos] = useState([{id: 1, content: 'React todo', important: true}])
    const [errorMessage, setErrorMessage] = useState(undefined)

    const fetchOptions = (method, payload = {}) => {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }}
        if (method !== 'DELETE') {
            options.body = JSON.stringify(payload)
        }
        return options
    }

    const getTodos = async () => {
        try {
            const response = await fetch(TODOS_ENDPOINT)
            if (response.status === 200) {
                const todos = await response.json()
                setTodos(todos)
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            console.error(`getTodos thrown an error: ${error}`)
        }
    }

    const addTodo = async (todo) => {
        try {
            const response = await fetch(TODOS_ENDPOINT, fetchOptions("POST", todo))
            if (response.status === 201) {
                const newTodo = await response.json()
                setTodos([...todos, newTodo])
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            setErrorMessage(`Note '${todo.content}' was not created`)
            setTimeout(() => {
                setErrorMessage(undefined)
            }, 2500)
            console.error(`addTodo thrown an error: ${error}`)
        }
    }

    const updateTodo = async (id, changedTodo) => {
        try {
            const response = await fetch(`${TODOS_ENDPOINT}/${id}`, fetchOptions("PATCH", changedTodo))
            if (response.status === 200) {
                const updatedTodo = await response.json()
                setTodos(todos.map(t => t.id !== id ? t : updatedTodo))
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            if (error === '404') {
                setTodos(todos.filter(t => t.id !== id))
                setErrorMessage(
                    `Todo '${changedTodo.content}' was previously deleted and could not be updated`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            } else {
                setErrorMessage(
                    `Todo '${changedTodo.content}' was not updated'`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)

            }
            console.error(`updateTodo thrown an error: ${error}`)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${TODOS_ENDPOINT}/${id}`, fetchOptions("DELETE"))
            if (response.status === 204) {
                setTodos(todos.filter(t => t.id !== id))
            } else {
                throw new Error(`${response.status}`)
            }
        } catch (error) {
            if(error === '404') {
                setTodos(todos.filter(t => t.id !== id))
                setErrorMessage(
                    `Todo was previously deleted`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            } else {
                setErrorMessage(
                    `Todo was not deleted`
                )
                setTimeout(() => {
                    setErrorMessage(undefined)
                }, 2500)
            }
            console.error(`deleteTodo thrown an error: ${error}`)
        }
    }

    return  [
        todos,
        getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        errorMessage
    ]
}

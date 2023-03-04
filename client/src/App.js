import { useState, useEffect } from 'react'
import useTodoService from './services/useTodoService'
import login from './services/loginService'
// import Notification from './components/shared/Notification'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Todos from './components/Todos'
import AddTodo from "./components/AddTodo"
// import Login from './components/Login'

function App() {
    const [
        todos,
        getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        errorMessage
    ] = useTodoService()

    const [showAllTodos, setShowAllTodos] = useState(true)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })


    useEffect(() => {
        (async () => {
            await getTodos()
        })()
    }, [])

    const handleAdd = async(todo) => {
        await addTodo(todo)
    }

    const handleUpdate = async (id, changedTodo) => {
        await updateTodo(id, changedTodo)
    }

    const handleDelete = async (id) => {
        await deleteTodo(id)
    }

    const handleLogin = async (e) => {
        // e.preventDefault()
        // await login(user)
    }

    const todosToShow = showAllTodos ? todos : todos.filter(t => t.important)

    return (
        <>
            <Navbar />
            <div className="App">
                {/*<Notification message={errorMessage}/>*/}
                {/*<Login*/}
                {/*    handleLogin={handleLogin}*/}
                {/*    user={user}*/}
                {/*    setUser={setUser}*/}
                {/*/>*/}
                <AddTodo handleAdd={handleAdd} />
                <Todos
                    todosToShow={todosToShow}
                    showAllTodos={showAllTodos}
                    setShowAllTodos={setShowAllTodos}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </div>
            <Footer />
        </>
    );
}

export default App;

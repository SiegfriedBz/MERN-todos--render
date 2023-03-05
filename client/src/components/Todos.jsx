import { useState } from 'react'
import Todo from './Todo'
import Button from './shared/Button'
import clsx from 'clsx'

const Todos = ({
                   todosToShow,
                   showAllTodos,
                   setShowAllTodos,
                   handleUpdate,
                   handleDelete }) => {

    const iconClass = clsx('fa-solid fs-2', {
        "fa-toggle-off": showAllTodos,
        "fa-toggle-on": !showAllTodos
    })

    const spanClass = clsx('ms-1',{
        "toggle-off": showAllTodos,
        "toggle-on": !showAllTodos
    })

    return (
        <>
            <div id='toggle-show-all-todos'>
                <Button
                    onClick={() => setShowAllTodos(prev => !prev)}
                >
                    <i className={iconClass}>< /i>
                    <span className={spanClass}>Show only important</span>
                </Button>
            </div>
            {todosToShow &&
                <ul>
                    {todosToShow.map(todo => {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
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

export default Todos

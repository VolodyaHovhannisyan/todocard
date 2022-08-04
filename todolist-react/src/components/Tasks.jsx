import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { TodoContext } from '../App'
import TodoDates from './TodoDates'


const Tasks = () => {
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')

    const {todoList, setTodoList} = useContext(TodoContext)

    const [todos, setTodos] = useState(todoList)

    const [todosDatesList, setTodosDatesList] = useState([])


    const onClick = (e) => {
        e.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 106464600),
            task,
            date,
            completed: false
        }

        if (task !== '' && date !== '') {
            setTodos((prev) => [...prev, newTodo])
        }


        setTask('')
        setDate((prev) => prev)


    }

    useEffect(() => {

        const todosCount = todos.map(todo => todo.date)
        const todoCount = (date) => todos.filter(todo => todo.date == date)

        const setOfTodoDates = new Set(todosCount)

        const obj = {};

        [...setOfTodoDates].forEach(el => {
            const currentTodoCount = todoCount(el)
            obj[el] = currentTodoCount.length


        });
        setTodosDatesList(Object.entries(obj))


    }, [todos])


    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
        setTodoList(todos)


    }, [todos])



    return (
        <div className='container'>
            <h1>To do list</h1>

            <div className='new_task_inputs'>
                <p className='task_par'>New Task</p>
                <div className='taskform'>
                    <input type="text" placeholder='Type here' value={task} onChange={(e) => {
                        setTask(e.target.value)
                    }} />
                    <input type="date" onChange={(e) => {
                        setDate(e.target.value)
                    }} />
                    <button className='btn' onClick={onClick}>Add</button>
                </div>

            </div>

            <div className='dates_list'>
                <p className='task_par'>Dates</p>
                {todosDatesList.map(todo => {
                    return <TodoDates key={Math.floor(Math.random() * 65494794)} dateobj={todo} />
                })}

            </div>



        </div>
    );
}

export default Tasks
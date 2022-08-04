import { useContext } from "react"
import { TodoContext } from "../App"

const Task = ({ todo }) => {

    const { todoList, setTodoList } = useContext(TodoContext)

    const onChange = (task) => {

        const todos = JSON.parse(localStorage.getItem('todos'))
        // const currentTodo = todos.filter(todo => todo.id === task.id)
        // const newTask = { ...task, completed: !task.completed }

        todos.map(todo => {
            if (todo.id === task.id) {
                todo.completed = !todo.completed
            }
            return ''
        })

        setTodoList(todos)

    }

    const onDelete = (task) => {
        const filteredTodos = todoList.filter(todo => todo.id !== task.id)

        setTodoList(filteredTodos)

    }


    return (
        <div className="task">
            <div className="check">
                <input
                    className={
                        todo.completed ? 'completed_checkbox' : ''
                    }
                    onChange={() => onChange(todo)}
                    type="checkbox" checked={todo.completed} name="" id="" />
                <p className={
                    todo.completed ? 'completed_task' : ''
                }>{todo.task}</p>
            </div>
            <div className="buttons">
                <button className='edit-btn' type="submit">Edit</button>
                <button onClick={() => onDelete(todo)} className='delete-btn' type="submit">Delete</button>
            </div>
        </div>
    )
}


export default Task
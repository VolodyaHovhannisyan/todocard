import { useContext, useState } from "react"
import { TodoContext } from "../App"

const EditTodo = ({ task, onEdit }) => {

    const [taskText, setTaskText] = useState(task.task)
    const { todoList, setTodoList } = useContext(TodoContext)



    const onClick = () => {
        const todos = [...todoList]

        todos.map(todo => {
            if (todo.id === task.id) {
                todo.task = taskText
            }
            return ''
        })

        setTodoList(todos)

        onEdit(prev => !prev)

    }


    return (
        <div className="input_edit">
            <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
            <button onClick={onClick} className="btn-edit">Edit</button>
        </div>
    )
}


const Task = ({ todo }) => {

    const { todoList, setTodoList } = useContext(TodoContext)

    const [updTodo, setUpdTodo] = useState('')
    const [editTask, setEditTask] = useState(false)

    const onChange = (task) => {

        const todos = JSON.parse(localStorage.getItem('todos'))

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
        <>
            <div className="task">
                <div className="check">
                    <input
                        className={
                            todo.completed ? 'completed_checkbox' : ''
                        }
                        onChange={() => onChange(todo)}
                        type="checkbox"
                        disabled={editTask}
                        checked={todo.completed} name="" id="" />
                    <p className={
                        todo.completed ? 'completed_task' : ''
                    }>{todo.task}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => {
                        setUpdTodo(todo.task)
                        setEditTask(prev => !prev)
                    }} className='edit-btn'
                        disabled={todo.completed}
                        type="submit">{editTask ? 'Save' : 'Edit'}</button>
                    <button onClick={() => onDelete(todo)} className='delete-btn' type="submit">Delete</button>
                </div>
            </div>
            {
                editTask && <EditTodo onEdit={setEditTask} task={todo} />
            }
        </>

    )
}


export default Task
import { useParams, Link } from 'react-router-dom'
import Task from './Task'


const Todo = () => {

    const { date } = useParams()

    const todos = JSON.parse(localStorage.getItem('todos'))

    const filteredTodos = todos.filter(todo => todo.date === date)

    return (
        <>
            <div className="container">
                <div className="head">
                    <div >
                        <Link className='link' to={'/'}>Go back</Link>
                    </div>
                    <div>
                        <h1>{date} ({filteredTodos.length})</h1>
                    </div>
                </div>
                <div className="todoList">
                    {filteredTodos.map(todo => {
                        return <Task key={todo.id} todo={todo} />
                    })
                    }

                </div>
            </div>
        </>
    )
}

export default Todo
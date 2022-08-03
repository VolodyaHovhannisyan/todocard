const Task = ({ todo }) => {

    return (
        <div className="task">
            <div className="check">
                <input type="checkbox" checked={todo.completed} name="" id="" />
                <p>{todo.task}</p>
            </div>
            <div className="buttons">

                <button className='edit-btn' type="submit">Edit</button>
                <button className='delete-btn' type="submit">Delete</button>
            </div>
        </div>
    )
}


export default Task
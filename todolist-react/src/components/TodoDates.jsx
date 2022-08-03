import { Link } from "react-router-dom"

const TodoDates = ({ dateobj }) => {

    return (
      <>
        <div className="todos_dates">
          <div className="todoDate">
            <div className="dateobj">{dateobj[0]} ({dateobj[1]})</div>
            <div>
              <Link to={`todo/${dateobj[0]}`}>View</Link>
            </div>
          </div>
        </div>
  
      </>
    )
  }

export default TodoDates
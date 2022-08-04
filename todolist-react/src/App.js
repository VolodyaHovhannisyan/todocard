import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tasks from './components/Tasks';
import Todo from './components/Todo';
import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext()

function App() {

  const [todoList, setTodoList] = useState([
    { id: 46544, task: "Go Gym", date: "2022-08-20", completed: true },
    { id: 8954645, task: "Pay bills", date: "2022-08-21", completed: false },
    { id: 9848, task: "Go theatre", date: "2022-08-21", completed: true },
    { id: 11121, task: "Go museum", date: "2022-08-25", completed: true },
    { id: 455454, task: "Go market", date: "2022-08-25", completed: true },
    { id: 98978744, task: "Go service", date: "2022-08-25", completed: false },
])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])


  return (
    <BrowserRouter>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/todo/:date" element={<Todo />} />
        </Routes>
      </TodoContext.Provider>
    </BrowserRouter>
  );
}

export default App;

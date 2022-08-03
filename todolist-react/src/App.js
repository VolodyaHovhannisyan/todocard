import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tasks from './components/Tasks';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/todo/:date" element={<Todo />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo/NewTodo';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer/Footer';

  
const data = [
  {id: "1", todo: "Learn React", status: ""},
  {id: "2", todo: "Learn JS", status: "completed"},
]

function App() {
  const [todos, setTodos] = useState(data);
  const [shownTodos, setShownTodos] = useState(data);
  const [showFilter, setShowFilter] = useState("all");
  const [lastId, setLastId] = useState(Number(data.length) + 1);

  const removeTodo = (id) => {
    const _todos = todos.filter(todo => todo.id !== id);
    setTodos(_todos);
  }

  const toggleStatus = (id) => {
    const _todos = [...todos];
    _todos.forEach((todo) => {
      if(todo.id === id){
        todo.status === "" ? todo.status = "completed" : todo.status = ""; 
      }
    })
    setTodos(_todos);
  }

  const removeCompleted = () => {
    const _todos = [...todos];
    setTodos(_todos.filter((todo) => todo.status === ""));
  }

  useEffect(() => {
    switch (showFilter) {
      case "all":
        setShownTodos(todos);
        break;
      case "completed":
        setShownTodos(todos.filter(todo => todo.status === "completed"));
        break;
      case "active":
        setShownTodos(todos.filter(todo => todo.status === ""));
        break;
      default:
        break;
    }
  }, [showFilter, todos])

  return (
    <section className="todo-app">
      <NewTodo 
        setTodos={setTodos}
        lastId={lastId}
        setLastId={setLastId}
      />
	    <div className="todo-list">
        {
          shownTodos.map((shownTodo) => {
            return (
              <Todo 
                key={shownTodo.id} 
                shownTodo={shownTodo} 
                setTodos={setTodos} 
                removeTodo={removeTodo} 
                toggleStatus={toggleStatus}
              />
            )
          })
        }
	    </div>
      <Footer 
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        removeCompleted={removeCompleted}
      />
    </section>
  )
}

export default App

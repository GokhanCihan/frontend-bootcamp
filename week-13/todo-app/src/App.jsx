import './App.css';
import NewTodo from './components/NewTodo/NewTodo';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer/Footer';
import Context from '../src/Context'
import { useContext } from 'react';

function App() {
  const { shownTodos } = useContext(Context);
  return (
    <section className="todo-app">
      <NewTodo />
	    <div className="todo-list">
        {
          shownTodos.map((shownTodo) => {
            return (
              <Todo 
                key={shownTodo.id} 
                shownTodo={shownTodo}
              />
            )
          })
        }
	    </div>
      <Footer />
    </section>
  )
}

export default App

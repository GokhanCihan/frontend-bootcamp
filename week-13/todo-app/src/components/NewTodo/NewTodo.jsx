import React from "react";
import { useContext } from "react";
import Context from "../../Context";

function NewTodo() {
  const { setTodos, lastId, setLastId } = useContext(Context);

  const handleNewTodo = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      const newId = (Number(lastId) + 1).toString();
      const newTodo = { id: newId, todo: e.target.value, status: "" }
      setTodos(prev => [...prev, newTodo]);
      setLastId(newId);
      e.target.value = "";
    }
  }
  
  return (
      <div className="header">
        <h1>todos</h1>
        <form >
          <input 
            className="new-todo"
            placeholder="what needs to be done?"
            onKeyDown={handleNewTodo}
            autoFocus
            />
        </form>
      </div>
  )
}

export default NewTodo
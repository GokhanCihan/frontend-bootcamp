import React, { useContext } from "react";
import Context from "../../Context";
import xmark from "../../assets/x-mark.png";


function Todo({shownTodo}) {
  const {removeTodo, toggleStatus } = useContext(Context);

  return (
    <div className={`todo-item ${shownTodo.status}`}>
      <div className="toggle"></div>
      <span 
        onClick={() => toggleStatus(shownTodo.id)} 
        className="todo-text"
      >
          {shownTodo.todo}
      </span>
      <div className="destroy">
        <img src={xmark}/>
        <button onClick={() => removeTodo(shownTodo.id)}></button>
      </div>
    </div>
  )
}

export default Todo
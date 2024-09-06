import React, { useEffect, useState } from "react";

const Context = React.createContext();

const data = [
  {id: "1", todo: "Learn React", status: ""},
  {id: "2", todo: "Learn JS", status: "completed"},
]

export function ContextProvider({children}) {
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
    <Context.Provider value={
      {
        lastId,
        setLastId,
        todos, 
        setTodos, 
        showFilter, 
        setShowFilter, 
        shownTodos, 
        setShownTodos,
        removeTodo,
        removeCompleted,
        toggleStatus,
      }
    }>
      {children}
    </Context.Provider>
  )
}

export default Context;
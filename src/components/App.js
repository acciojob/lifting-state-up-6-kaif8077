import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "learn react", completed: false },
    { id: 2, text: "python", completed: false },
    { id: 3, text: "javascript", completed: false }
  ]);

  function handleComplete(id) {
  
    const updatedTodos = todos.map(todo => ({
      ...todo,
      completed: true
    }));

    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;

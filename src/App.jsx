import { useState } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text.trim() === "") return
    setTodos([...todos, text])
    setText("")
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>

      <TodoInput
        text={text}
        setText={setText}
        addTodo={addTodo}
      />

      {todos.length === 0 && <p>No todos yet</p>}

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App
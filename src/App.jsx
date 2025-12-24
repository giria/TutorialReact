import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(["Learn React", "Practice"])

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}

export default App
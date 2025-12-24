import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(["Apple", "Orange"])

  return (
    <>
    <div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </div>
    <div>
    <button onClick={() => setTodos([...todos, "Banana"])}>Add Banana</button>
    </div>
    </>

  )
}

export default App
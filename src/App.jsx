import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onIncrease={setCount} />
    </div>
  )
}

function Child({ onIncrease }) {
  return (
    <button onClick={() => onIncrease(prev => prev + 1)}>
      Increase
    </button>
  )
}

export default App
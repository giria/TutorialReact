import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
     console.log("Value changed to", count)
  }, [count])

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  )
}

export default App
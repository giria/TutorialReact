import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Welcome, ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>

      <h1>{message}</h1>
    </form>
  )
}

export default App
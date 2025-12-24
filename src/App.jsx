import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hello ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
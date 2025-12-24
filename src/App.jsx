import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>

      {show && <h1>Hello React!</h1>}
    </div>
  )
}

export default App
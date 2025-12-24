import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  fetchUsers()
}, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default App
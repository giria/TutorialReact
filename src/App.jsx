import { useState, useEffect } from "react"

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const url = "https://jsonplaceholder.typicode.com/posts"

 useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setPosts(data)
      setLoading(false)
    })
    .catch(error => {
        console.error(error)
        setLoading(false)
      })
}, [])
  return (
    <>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
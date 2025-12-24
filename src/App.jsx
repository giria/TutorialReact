function Welcome({ name, age }) {
  return <h2>Name: {name} | Age: {age}</h2>
}

function App() {
  return (
    <div>
      <Welcome name="Joan" age={25} />
      <Welcome name="Alex" age={30} />
    </div>
  )
}

export default App
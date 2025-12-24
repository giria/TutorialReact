function TodoInput({ text, setText, addTodo }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput
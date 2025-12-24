import TodoItem from "./TodoItem"

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => removeTodo(index)}
        />
      ))}
    </ul>
  )
}

export default TodoList
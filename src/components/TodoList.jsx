import TodoItem from './TodoItem';

function TodoList ({ todos, onToggleComplete, onDelete, onSaveEdit }) {
  return (
  <ul className="space-y-3">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleComplete={onToggleComplete}
        onDelete={onDelete}
        onSaveEdit={onSaveEdit}
      />
    ))}
  </ul>
  )
} 

export default TodoList;
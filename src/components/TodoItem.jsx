import  { useState } from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete, onSaveEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center bg-slate-50 p-3 rounded-lg transition-all duration-300">
      {isEditing ? (
        <form onSubmit={handleSave} className="flex-grow flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-2 border border-slate-300 rounded-md"
            autoFocus
          />
          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Save</button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-400 text-white px-3 py-1 rounded-md hover:bg-slate-500">Cancel</button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo)}
            className="h-6 w-6 mr-4 accent-blue-600 cursor-pointer"
          />
          <span className={`flex-grow text-slate-800 ${todo.completed ? 'line-through text-slate-400' : ''}`}>
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-yellow-600 hover:text-yellow-800 ml-4 px-3 py-1 rounded-md transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-sm font-medium text-red-600 hover:text-red-800 ml-2 px-3 py-1 rounded-md transition-colors"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
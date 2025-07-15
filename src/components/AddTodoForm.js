import { useState } from "react";

function AddTodoForm  ({ onAddTodo })  {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;
    onAddTodo(newTodoText);
    // Clear the input field after submission
    setNewTodoText(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
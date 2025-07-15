import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';




function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  // Handler for adding a new todo
  const handleAddTodo = async (text) => {
    const newTodo = { text, completed: false };
    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error('Failed to add todo.');
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
    } catch (err) {
      console.error(err.message);
    }
  };

  

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg mx-4">
        <Header title="My To-Do List" />
        <ErrorMessage message={error} />
        <AddTodoForm onAddTodo={handleAddTodo} />
        
        {isLoading ? (
          <p className="text-center text-slate-500">Loading tasks...</p>
        ) : (
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
            onSaveEdit={handleSaveEdit}
          />
        )}
      </div>
    </div>
  );
}
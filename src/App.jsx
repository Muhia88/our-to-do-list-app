import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import ErrorMessage from './components/ErrorMessage';

const API_URL = 'http://localhost:3001/todos';


function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from the server on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch todos. Server responded with ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Handler for adding a new todo
  const handleAddTodo = async (text) => {
    const newTodo = { text, completed: false };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error('Failed to add todo.');
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handler for deleting a todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete todo.');
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Handler for toggling the completed status
  const handleToggleComplete = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    try {
      const response = await fetch(`${API_URL}/${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: updatedTodo.completed }),
      });
      if (!response.ok) throw new Error('Failed to update todo.');
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Handler for saving an edited todo
  const handleSaveEdit = async (id, text) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) throw new Error('Failed to save or edit.');
      const updatedTodo = await response.json();
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg mx-4">
        <Header title="Our To-Do List" />
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

export default App;
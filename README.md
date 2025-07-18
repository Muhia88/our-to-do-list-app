# Our Todo List App

> A simple, responsive, and interactive Todo List application built with React, Vite, and Tailwind CSS.

---

## 🚀 Features

- Add, edit, and delete todo items
- Mark tasks as completed or uncompleted
- Persistent state via a RESTful API backend
- Graceful loading and error handling
- Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend (optional):** JSON Server or any REST API at `http://localhost:3001/todos`
- 

---

## 📦 Getting Started

### Prerequisites

- Node.js 
- npm or yarn
- JSON Server for a quick mock API

### Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/<your-username>/our-todo-list-app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
  ```bash
    npm run dev
  ```
4. Open your browser at `http://localhost:5173`

###  Backend API
This app expects a REST API running at `http://localhost:3001/todos`
You can use JSON Server to quickly mock an API.

1. Setup JSON Server:
  ```bash
  npm install -g json-server
  ```
2. Create a db.json file:
{
  "todos": []
}

3. Run JSON Server:
  ```bash
  json-server --watch db.json --port 3001
  ```

Your API will be available at `http://localhost:3001/todos`

---

## Authors
• Daniel Muhia
• Joe Wanjema
• Justin Tutu

--- 

## 📜 License 
This project is open source and available under the MIT License.

---





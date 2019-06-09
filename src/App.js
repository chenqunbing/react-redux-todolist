import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilter from './components/VisibilityFilters'
function App() {
  return (
    <div className="App">
      <span>TodoList</span>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </div>
  );
}

export default App;

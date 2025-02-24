import React from 'react'
import AppHeader from "./app-header"
import SearchPanel from "./search-panel"
import TodoList from "./todo-list"
import TestApiPanel from './test-api-panel'

const App = () => {
  const todoData = [
    {label: 'One', important: false, id: 1},
    {label: 'Two', important: true, id: 2},
    {label: 'Three', important: false, id: 3},
    {label: 'Four', important: true, id: 4},
    {label: 'Five', important: false, id: 5},
  ]
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList data={todoData}/>
      <TestApiPanel />
    </div>
  )
}

export default App
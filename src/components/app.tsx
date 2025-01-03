import React from 'react'
import AppHeader from "./app-header"
import SearchPanel from "./search-panel"
import TodoList from "./todo-list"

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
    </div>
  )
}

export default App
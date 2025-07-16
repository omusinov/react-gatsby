import React from 'react'
import AppHeader from "./app-header"
import SearchPanel from "./search-panel"
import TodoList from "./todo-list"
import TestApiPanel from './test-api-panel'
import TestKeywords from './test-keywords'
import { keywordsData, todoData } from '../interfaces'

const App = () => {
  return (
    <div>
      {/* <AppHeader /> */}
      {/* <SearchPanel /> */}
      {/* <TodoList data={todoData}/> */}
      {/* <TestApiPanel /> */}
      <TestKeywords data={keywordsData} className='m-2'/>
    </div>
  )
}

export default App
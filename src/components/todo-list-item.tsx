import React from 'react'
import * as styles from './todo-list-item.module.css'

interface Props {
  label: string
  important?: boolean
}

const TodoListItem = ( { label, important = false}: Props ) => {
  const liStyle = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span style={liStyle} className={styles.todolistitem}>
      { label }
    </span>
  )
}

export default TodoListItem
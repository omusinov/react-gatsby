import React from 'react'

interface Props {
  label: string
  important?: boolean
}

const TodoListItem = ( { label, important = false}: Props ) => {
  const liStyle = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span style={liStyle}>
      {label}
    </span>
  )
}

export default TodoListItem
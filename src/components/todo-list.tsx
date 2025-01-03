import React from 'react'
import TodoListItem from './todo-list-item'

interface Props {
	data: any[]
}

const TodoList = ({data = []}: Props) => {
	return (
		<ul>
			{
				data.length > 0 
				?
				data.map((item) => {
					const { id, ...itemProps } = item
					return (
						<li key={id}>
							<TodoListItem { ...itemProps } />
						</li>
					)
				})
				:
				<li>No items</li>
			}
		</ul>
  )
}

export default TodoList
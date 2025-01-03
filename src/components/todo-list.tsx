import React from 'react'
import TodoListItem from './todo-list-item'
import * as styles from "./todo-list.module.css"

interface Props {
	data: any[]
}

const TodoList = ({data = []}: Props) => {
	return (
		<ul className={`list-group ${styles.todolist}`}>
			{
				data.length > 0 
				?
				data.map((item) => {
					const { id, ...itemProps } = item
					return (
						<li key={id} className='list-group-item'>
							<TodoListItem { ...itemProps } />
						</li>
					)
				})
				:
				<li className='todo-list'>No items</li>
			}
		</ul>
  )
}

export default TodoList
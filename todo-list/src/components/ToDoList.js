import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => (
	<ul className="todo-list">
		{todos && todos.length
			? todos.map((item, index) => {
					return <ToDo key={item.id} {...item} />;
			  })
			: 'No todos, yay!'}
	</ul>
);

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(ToDoList);

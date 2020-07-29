import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/index';

const ToDoList = ({ todos, toggleToDo }) => {
	return (
		<ul>
			{todos != null && todos.map((item) => <ToDo key={item.id} {...item} onClick={() => toggleToDo(item.id)} />)}
		</ul>
	);
};

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = (dispatch) => ({
	toggleToDo: (id) => dispatch(toggleToDo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

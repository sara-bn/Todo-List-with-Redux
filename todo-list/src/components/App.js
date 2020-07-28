import React from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

function App() {
	return (
		<div className="App">
			<h1>ToDo List with Redux</h1>
			<ToDoList />
			<AddToDo />
		</div>
	);
}

export default App;

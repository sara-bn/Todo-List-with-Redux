import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';

function AddToDo({ addToDo }) {
	const [value, setValue] = useState('');

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};
	const handleAdd = () => {
		setValue('');
		addToDo(value);
	};

	return (
		<>
			<input type="text" onChange={handleOnChange} value={value} placeholder="New Task" />
			<button onClick={handleAdd}>Add</button>
		</>
	);
}

export default connect(null, { addToDo })(AddToDo);

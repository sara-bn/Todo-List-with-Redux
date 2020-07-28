import React from 'react';

const Todo = ({ description, completed }) => (
	<li>
		{description} | {completed ? 'Done' : 'Not Yet'}
	</li>
);

export default Todo;

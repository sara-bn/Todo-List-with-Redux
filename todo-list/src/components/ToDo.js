import React from 'react';

const Todo = ({ description, completed, id }) => (
	<li>
		{id + 1} | {description} | {completed ? 'Done' : 'Not Yet'}
	</li>
);

export default Todo;

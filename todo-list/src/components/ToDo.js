import React from 'react';

const ToDo = ({ onClick, completed, description, id }) => (
	<li onClick={onClick}>
		{id + 1} | {description} | {completed ? 'Done' : 'Not Yet'}
	</li>
);

export default ToDo;

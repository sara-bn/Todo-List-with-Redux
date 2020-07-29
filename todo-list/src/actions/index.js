let nextTodoId = 0;

export const addToDo = (description) => ({
	type: 'ADD_ITEM',
	id: nextTodoId++,
	completed: false,
	description,
});

export const toggleToDo = (id) => ({
	type: 'TOGGLE_ITEM',
	id,
});

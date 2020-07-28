let nextTodoId = 0;

export const addToDo = (description) => ({
	type: 'ADD_ITEM',
	id: nextTodoId++,
	complete: false,
	description,
});

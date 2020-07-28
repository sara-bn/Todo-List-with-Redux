const todos = (state = [{ id: 1, description: 'Study', completed: false }], action) => {
	let nextId = 1;
	switch (action.type) {
		case 'ADD-ITEM':
			return [
				...state,
				{
					id: nextId++,
					description: action.payload,
					completed: false,
				},
			];
		default:
			return state;
	}
};

export default todos;

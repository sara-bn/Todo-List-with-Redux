const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state,
				{
					id: action.id,
					completed: false,
					description: action.description,
				},
			];
		case 'TOGGLE_ITEM':
			return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		default:
			return state;
	}
};
export default todos;

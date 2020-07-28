const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state,
				{
					id: action.id,
					complete: action.complete,
					description: action.description,
				},
			];
		case 'TOGGLE_ITEM':
			return state.map((todo) => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));
		default:
			return state;
	}
};
export default todos;

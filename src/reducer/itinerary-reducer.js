export default (state = {}, {type, payload}) => {
	switch(type) {
		case 'GET_ALL':
			return {...state};
		case 'CREATE_ITINERARY':
			return {...state, payload};
		case 'EDIT_ITINERARY':
			let newState = {...state};
			newState[payload.id] = payload;
			return newState;
		case 'DELETE_ITINERARY':
			let updatedState = {...state};
			delete updatedState[payload.id];
			return updatedState;
		default:
			return state;
	}
};

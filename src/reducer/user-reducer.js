export default (state = {}, {type, payload}) => {
	const user = payload;
	switch(type) {
		case 'USER_SET':
			return token;
		case 'USER_REMOVE':
			return null;
		default:
			return null;
	}
};

export const initialState = {
	user: null,
	token: null,
	tracks: [],
	trackUri: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_TRACK":
			return {
				...state,
				trackUri: action.trackUri,
			};
		case "SET_TRACKS_LIST":
			return {
				...state,
				tracks: action.tracks,
			};

		default:
			return state;
	}
};

export default reducer;

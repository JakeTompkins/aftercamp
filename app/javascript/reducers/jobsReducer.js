import { SET_JOBS } from "../actions";

export default (state, action) => {
	if (state === undefined) {
		return [];
	}

	switch (action.type) {
		case SET_JOBS:
			return action.payload;
		default:
			return state;
	}
};

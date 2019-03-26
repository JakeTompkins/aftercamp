import { SET_JOB } from "../actions";

export default (state, action) => {
	if (state === undefined) {
		return {};
	}

	switch (action.type) {
		case SET_JOB:
			return action.payload;
		default:
			return state;
	}
};

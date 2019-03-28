import { SET_GRADS } from "../actions";

export default (state, action) => {
	if (state === undefined) {
		return [];
	} else {
		switch (action.type) {
			case SET_GRADS:
				return action.payload;
			default:
				return state;
		}
	}
};

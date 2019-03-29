import SET_USER from "../actions";

export default (state, action) => {
	if (state === undefined) {
		return {};
	}

	switch (action.type) {
		case SET_USER:
			let suppInfo = {};

			if (action.payload.grad) {
				suppInfo = action.payload.grad;
			} else if (action.payload.employer) {
				suppInfo = action.payload.employer;
			}

			return { ...action.payload.user, ...suppInfo };

		default:
			return state;
	}
};

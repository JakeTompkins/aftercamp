export const SET_JOBS = "SET_JOBS";
export const SET_JOB = "SET_JOB";
export const SET_GRADS = "SET_GRADS";
import * as api from "../API/API";

export const setJobs = () => {
	const promise = api.getJobs();

	return {
		type: SET_JOBS,
		payload: promise
	};
};

export const setJob = id => {
	const promise = api.getJob(id);

	return {
		type: SET_JOB,
		payload: promise
	};
};

export const setGrads = () => {
	const promise = api.getGrads();

	return {
		type: SET_GRADS,
		payload: promise
	};
};

export const SET_JOBS = "SET_JOBS";
export const SET_JOB = "SET_JOB";
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

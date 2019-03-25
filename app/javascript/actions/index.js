export const SET_JOBS = "SET_JOBS";
import axios from "axios";
import * as api from "../API/API";

export const setJobs = () => {
	const promise = api.getJobs();

	return {
		type: SET_JOBS,
		payload: promise
	};
};

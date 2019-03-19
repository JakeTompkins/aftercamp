export const SET_JOBS = "SET_JOBS";
import axios from "axios";
require("../API/API");

export const setJobs = () => {
	const promise = axios.get("/jobs");

	return {
		type: SET_JOBS,
		payload: promise
	};
};

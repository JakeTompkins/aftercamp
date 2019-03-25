import axios from "axios";
import * as Cookies from "js-cookie";

const setConfig = () => {
	const token = Cookies.get("jwt");
	if (token) {
		return { headers: { Authorization: `Bearer ${token}` } };
	}
	return false;
};

export const registerUser = data => {
	console.log(data);

	const payload = { user: { ...data } };

	axios
		.post("/users/register", payload)
		.then(result => {
			console.log(result.data);
		})
		.catch(err => {
			console.log(err);
		});
};

export const loginUser = data => {
	console.log("Logging in");

	const payload = { auth: { ...data } };

	axios
		.post("/user_token", payload)
		.then(response => {
			let token = response.data.jwt;
			console.log(token);
			Cookies.set("jwt", token, { expires: 14 });
		})
		.catch(err => {
			console.log(err);
		});
};

export const getJobs = () => {
	const config = setConfig();
	if (!config) {
		return null;
	} else {
		return axios
			.get("/api/jobs", null, config)
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const getJob = id => {
	const config = setConfig();
	if (!config) {
		return null;
	} else {
		return axios
			.get("/api/jobs/" + id, null, config)
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const createJob = data => {
	const config = setConfig();
	if (!config) {
		return false;
	} else {
		payload = { job: { ...data } };
		return axios
			.post("/api/jobs", payload, config)
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const updateJob = (id, data) => {
	const config = setConfig();
	if (!config) {
		return false;
	} else {
		payload = { job: { ...data } };
		return axios
			.put("/api/jobs/" + id, payload, config)
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const deleteJob = id => {
	const config = setConfig();
	if (!config) {
		return false;
	} else {
		return axios
			.delete("/api/jobs/" + id)
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

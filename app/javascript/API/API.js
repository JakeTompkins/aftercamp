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
	let user = {};

	return axios
		.post("/user_token", payload)
		.then(response => {
			let token = response.data.jwt;
			console.log(token);
			return token;
		})
		.then(token => {
			Cookies.set("jwt", token, { expires: 14 });
			getUser().then(res => {
				console.log(res);
				return res;
			});
		})
		.then(res => {
			return res;
		})
		.catch(err => {
			console.log(err);
		});
};

export const getUser = () => {
	const config = setConfig();
	if (!config) {
		return null;
	}
	return axios
		.get("/user", null, config)
		.then(response => {
			console.log("response: " + response);
			return response.data.data;
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

export const getGrads = () => {
	const config = setConfig();
	if (!config) {
		return false;
	} else {
		return axios
			.get("/api/grads")
			.then(response => {
				return response.data.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};

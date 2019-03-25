import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";

import LandingPage from "../components/landingPage";
import RegistrationPage from "../containers/registrationPage";
import LoginPage from "../containers/loginPage";
import JobsIndexPage from "../containers/jobsIndexPage";

import reduxPromise from "redux-promise";
const middleware = applyMiddleware(reduxPromise);

import jobsReducer from "../reducers/jobsReducer";
import { reducer as formReducer } from "redux-form";
const reducers = combineReducers({
	jobs: jobsReducer,
	form: formReducer
});

const store = createStore(reducers, {}, middleware);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/register" component={RegistrationPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact pat="/jobs" component={JobsIndexPage} />
				</Switch>
			</Router>
		</Provider>,
		document.body.appendChild(document.createElement("div"))
	);
});

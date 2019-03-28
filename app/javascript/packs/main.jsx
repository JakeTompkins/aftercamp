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
import JobsShowPage from "../containers/jobsShowPage";
import GradsIndexPage from "../containers/gradsIndexPage";

import reduxPromise from "redux-promise";
const middleware = applyMiddleware(reduxPromise);

import jobsReducer from "../reducers/jobsReducer";
import { reducer as formReducer } from "redux-form";
import jobReducer from "../reducers/jobReducer";
import gradsReducer from "../reducers/gradsReducer";
const reducers = combineReducers({
	jobs: jobsReducer,
	form: formReducer,
	job: jobReducer,
	grads: gradsReducer
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
					<Route exact path="/jobs" component={JobsIndexPage} />
					<Route exact path="/jobs/:id" component={JobsShowPage} />
					<Route exact path="/grads" component={GradsIndexPage} />
				</Switch>
			</Router>
		</Provider>,
		document.body.appendChild(document.createElement("div"))
	);
});

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
import RegistrationPage from "../containers/registrationForm";

import reduxPromise from "redux-promise";
const middlewares = applyMiddleware(reduxPromise);

import jobsReducer from "../reducers/jobsReducer";
import { reducer as formReducer } from "redux-form";
const reducers = combineReducers({
	jobs: jobsReducer,
	form: formReducer
});

const store = createStore(reducers, {}, middlewares);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" component={LandingPage} />
					<Route path="/register" component={RegistrationPage} />
				</Switch>
			</Router>
		</Provider>,
		document.body.appendChild(document.createElement("div"))
	);
});

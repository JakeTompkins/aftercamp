import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const root = props => {
	return <div />;
};

const reducers = combineReducers({});

const store = createStore(reducers);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Provider store={store}>
			<Root />
		</Provider>,
		document.body.appendChild(document.createElement("div"))
	);
});

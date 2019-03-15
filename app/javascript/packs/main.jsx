import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const root = props => {
	return <div />;
};

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Root />,
		document.body.appendChild(document.createElement("div"))
	);
});

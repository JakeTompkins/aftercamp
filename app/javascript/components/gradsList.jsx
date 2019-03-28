import React, { Component } from "react";
import GradCard from "./gradCard";

const GradsList = props => {
	return (
		<div className="row">
			{props.grads.map(grad => {
				return <GradCard grad={grad} />;
			})}
		</div>
	);
};

export default GradsList;

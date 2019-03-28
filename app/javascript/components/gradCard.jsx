import React, { Component } from "react";

const GradCard = props => {
	const grad = props.grad;
	return (
		<div className="grad-card col-sm-12 col-md-4">
			<h4>{grad.name}</h4>
			<img src={grad.avatar_url} alt="user avatar" />
			<p>{grad.camp}</p>
			<p>{grad.github}</p>
			<p>{grad.stack}</p>
			<p>{grad.graduation_date}</p>
			<p>{grad.cv}</p>
		</div>
	);
};

import React, { Component } from "react";

const JobCard = props => {
	return (
		<div className="container col">
			<div className="row">
				<div className="col">
					<h1>{props.job.role}</h1>
				</div>
			</div>
		</div>
	);
};

export default JobCard;

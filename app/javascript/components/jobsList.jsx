import React, { Component } from "react";
import { connect } from "react-redux";

import JobCard from "./jobCard";
class JobsList extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					{this.props.jobs.map(job => {
						return <JobCard job={job} key={job.id} />;
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		jobs: state.jobs
	};
};

export default connect(mapStateToProps)(JobsList);

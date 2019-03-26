import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setJob } from "../actions";
class JobsShowPage extends React.Component {
	componentWillMount() {
		const id = this.props.match.params.id;
		this.props.setJob(id);
	}
	render() {
		const job = this.props.job;
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>{job.role}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 offset-sm-3">
						<p>{job.description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3">
						<p>{job.salary_range}</p>
					</div>
					<div className="col-sm-3 offset-sm-6">
						<p>{job.location}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		job: state.job
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			setJob: setJob
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JobsShowPage);

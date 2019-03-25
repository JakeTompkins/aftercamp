import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setJobs } from "../actions";

import JobsList from "../components/jobsList";

class JobsIndexPage extends React.Component {
	componentWillMount() {
		this.props.setJobs();
	}
	render() {
		return <JobsList />;
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			setJobs: setJobs
		},
		dispatch
	);
};

export default connect(
	null,
	mapDispatchToProps
)(JobsIndexPage);

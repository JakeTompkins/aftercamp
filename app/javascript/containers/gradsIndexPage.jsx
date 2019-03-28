import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setGrads } from "../actions";
import GradsList from "../components/gradsList";

class GradsIndexPage extends React.Component {
	componentWillMount = () => {
		this.props.setGrads();
	};
	render() {
		return (
			<div className="container">
				<GradsList grads={this.props.grads} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		grads: state.grads
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			setGrads: setGrads
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GradsIndexPage);

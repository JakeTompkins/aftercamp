import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginForm from "../components/loginForm";
import { loginUser } from "../API/API";

import { setUser } from "../actions";

class LoginPage extends React.Component {
	submit = values => {
		loginUser(values).then(user => {
			console.log(user);
			setUser(user);
		});
	};

	render() {
		return <LoginForm onSubmit={this.submit} />;
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			setUser: setUser
		},
		dispatch
	);
};

export default connect(
	null,
	mapDispatchToProps
)(LoginPage);

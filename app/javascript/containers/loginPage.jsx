import React, { Component } from "react";
import registrationForm from "../components/registrationForm";
import LoginForm from "../components/loginForm";
import { loginUser } from "../API/API";

class LoginPage extends React.Component {
	submit = values => {
		loginUser(values);
	};

	render() {
		return <LoginForm onSubmit={this.submit} />;
	}
}

export default LoginPage;

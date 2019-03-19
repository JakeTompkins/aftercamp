import React, { Component } from "react";
import registrationForm from "../components/registrationForm";
import RegistrationForm from "../components/registrationForm";
import { registerUser } from "../API/API";

class RegistrationPage extends React.Component {
	submit = values => {
		registerUser(values);
	};

	render() {
		return <RegistrationForm onSubmit={this.submit} />;
	}
}

export default RegistrationPage;

import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { submitRegistration } from "../actions";

const RegistrationForm = props => {
	const handleSubmit = props;

	return <form onSubmit={handleSubmit}>{}</form>;
};

RegistrationForm = reduxForm({
	form: "registration"
})(RegistrationForm);

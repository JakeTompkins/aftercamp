import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { submitRegistration } from "../actions";

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
		const { handleSubmit } = props;
		this.handleSubmit = handleSubmit;
	}

	render() {
		return (
			<form className="container-fluid" onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<Field
								className="form-control"
								name="name"
								component="input"
								type="text"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<Field
								className="form-control"
								name="email"
								component="input"
								type="email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<Field
								className="form-control"
								name="password"
								component="input"
								type="password"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password_confirmation">Confirm Password</label>
							<Field
								className="form-control"
								name="password_confirmation"
								component="input"
								type="password"
							/>
						</div>
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</div>
				</div>
			</form>
		);
	}
}

RegistrationForm = reduxForm({
	form: "registration"
})(RegistrationForm);

export default RegistrationForm;

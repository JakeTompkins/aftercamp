import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { submitRegistration } from "../actions";

class LoginForm extends React.Component {
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
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</div>
				</div>
			</form>
		);
	}
}

LoginForm = reduxForm({
	form: "registration"
})(LoginForm);

export default LoginForm;

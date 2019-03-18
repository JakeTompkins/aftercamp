import React, { Component } from "react";
import config from "../config/LandingPage";
import navConfig from "../config/navBar";
import { Link } from "react-router-dom";

import NavBar from "./navBar";

const LandingPage = props => {
	return (
		<div className="container-fluid vh-100" id="home-container">
			<NavBar links={navConfig.links} />
			<div className="container d-flex flex-column h-100 justify-content-center">
				<div className="row">
					<div className="col-sm-12">
						<h1 className="display-1 text-center text-primary">After Camp</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-sm-4 text-center">
						<Link to="/register" className="btn btn-primary btn-lg">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

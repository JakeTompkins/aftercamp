import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
	return (
		<ul className="nav justify-content-end sticky-top">
			{props.links.map(link => {
				return (
					<li className="nav-link" key={link[0]}>
						<Link to={link[1]}>{link[0]}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavBar;

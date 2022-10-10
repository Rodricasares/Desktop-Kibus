import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-transparent bg-transparent mb-3 logo">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="" src={logo}/>
</span>
			</Link>
		
		</nav>
	);
};

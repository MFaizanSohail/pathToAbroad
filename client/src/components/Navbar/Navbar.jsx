import React from "react";
import "./Navbar.scss";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Muinavbar from "../Muinavbar/Muinavbar";
import Profile from "../Profile/Profile";
import { isLoggedIn } from "../../utility/auth";

const LoginOut = () => {
	return (
		<div className="logButtons">
			<button className="signup" color="inherit">
				<Link to="/signup">Sign Up </Link>
			</button>
			<button className="signin" color="inherit">
				<Link to="/login">Sign In </Link>
			</button>
		</div>
	);
};

const Navbar = ({ signup }) => {

	return (
		<Box>
			<AppBar position="static">
				<Toolbar className="navbar">
					<Muinavbar className="muinavbar" />
					<div className="logo">
						<Link to="/">
							<img src={"../../img/logowhite.png"} alt="" />
						</Link>
					</div>
					{signup ? (
						<div className="logging-page">
							<div className="heading">
								<h1>{signup}</h1>
							</div>
							<div className="signlog-right"></div>
						</div>
					) : (
						<div className="nav">
							<ul className="navitems">
								<li>
									<Link to="/"> Home </Link>
								</li>
								<li>
									<Link to="/about"> About us</Link>
								</li>
								<li>
									<Link to="/visa"> Visa </Link>
								</li>
								<li>
									<Link to="/university">University</Link>
								</li>
								<li>
									<Link to="/contact">Contact us</Link>
								</li>
								{isLoggedIn() ? (
									<>
										<Profile />
									</>
								) : (
									<LoginOut />
								)}
							</ul>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;

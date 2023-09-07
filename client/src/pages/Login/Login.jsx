import React, { useState } from "react";
import { useFormik } from "formik";
import Navbar from "../../components/Navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import { loginSchema } from "./LoginSchema";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Login.scss"
import { isLoggedIn } from "../../utility/auth";


const Login = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: loginSchema,
			onSubmit: async (values) => {
				try {
					setIsLoading(true);
					const response = await axios.post(
						"http://localhost:4000/user/login",
						values,
						{
							withCredentials: true,
						}
					);
					setTimeout(() => {
						setIsLoading(false);
						if (response.data.status === "success") {
							console.log(response);
							dispatch({ type: "login" });
							setLoginSuccess(true);
						} else {
							setErrorMessage(response.data.message);
						}
					}, 500);
				} catch (error) {
					console.error("Error logging in:", error);
					setIsLoading(false);
				}
			},
		});

		if (isLoggedIn()) {
			return <Navigate replace to="/" />;
		}
		
	return (
		<div className="signinform">
			<div className="navbar">
				<Navbar signup={"Log In"} />{" "}
			</div>
			<div className="formbody">
				<div className="formcover">
					<div className="leftside">
						<img
							src="/img/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
							alt=""
						/>
					</div>
					<form className="rightside" onSubmit={handleSubmit}>
						<div className="mob-heading">
							<h1>Login</h1>
						</div>
						<input
							placeholder="Email Address"
							id="email"
							name="email"
							type="email"
							onChange={handleChange}
							value={values.email}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email ? (
							<p className="form-error">{errors.email}</p>
						) : null}

						<input
							placeholder="Enter Password"
							id="password"
							name="password"
							type="password"
							onChange={handleChange}
							value={values.password}
							onBlur={handleBlur}
						/>
						{errors.password && touched.password ? (
							<p className="form-error">{errors.password}</p>
						) : null}

						<button
							className="form-submit"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? "Checking" : "Login"}
						</button>
						{errorMessage && (
							<p className="form-error">{errorMessage}</p>
						)}
						<label className="haveaccount">
							<Link to={"/signup"}>
								Don't have an account? Sign up!
							</Link>
						</label>
					</form>
					{loginSuccess && (
						<div className="success-message">
							Login successful! Redirecting to homepage...
							<Navigate to="/" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;

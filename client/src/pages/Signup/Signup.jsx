import React, { useState } from "react";
import "./Signup.scss";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";
import Navbar from "../../components/Navbar/Navbar";
import Registered from "./Registered";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
	const [registered, setRegistered] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				password: "",
				confirm_password: "",
			},
			validationSchema: signUpSchema,
			onSubmit: async (values) => {
				try {
					setIsLoading(true);
					const response = await axios.post(
						"http://localhost:4000/user/create",
						values,
						{
							withCredentials: true,
						}
					);

					if (response.status === 200) {
						setRegistered(true);
					}

					setIsLoading(false);
				} catch (error) {
					console.error("Error creating user:", error);
					setIsLoading(false);

					if (error.response && error.response.status === 400) {
						setErrorMessage("Email is already taken.");
					} else {
						setErrorMessage("Error creating user.");
					}
				}
			},
		});
		

	return (
		<div className="signupform">
			<div className="navbar">
				<Navbar signup={"Sign Up"} />{" "}
			</div>
			<div className="formbody">
				<div className="formcover">
					<div className="leftside">
						<img
							src="/img/marissa-grootes-TVllFyGaLEA-unsplash.jpg"
							alt=""
						/>
					</div>
					{registered ? (
						<Registered />
					) : (
						<form className="rightside" onSubmit={handleSubmit}>
							<div className="mob-heading">
								<h1>Signup</h1>
							</div>
							<input
								placeholder="Enter Your Name"
								id="name"
								name="name"
								type="text"
								onChange={handleChange}
								value={values.name}
								onBlur={handleBlur}
							/>
							{errors.name && touched.name ? (
								<p className="form-error">{errors.name}</p>
							) : null}

							<input
								placeholder="Enter Your Email"
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
								placeholder="Enter Your Password"
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

							<input
								placeholder="Enter Your Confirm Password"
								id="confirm_password"
								name="confirm_password"
								type="password"
								onChange={handleChange}
								value={values.confirm_password}
								onBlur={handleBlur}
							/>
							{errors.confirm_password &&
							touched.confirm_password ? (
								<p className="form-error">
									{errors.confirm_password}
								</p>
							) : null}

							<button
								className="form-submit"
								type="submit"
								disabled={isLoading}
							>
								{isLoading ? "Creating ..." : "Submit"}
							</button>
							<div className="haveaccount">
								{" "}
								<Link to={"/login"}>
									{" "}
									All ready have account !{" "}
								</Link>{" "}
							</div>
							{errorMessage && (
								<p className="form-error">{errorMessage}</p>
							)}
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default Signup;

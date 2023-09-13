import React, { useRef, useState } from "react";
import "./Contact.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

function ContactForm() {
	const form = useRef();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false); // State to manage loading
	const [isError, setIsError] = useState(false); // State to track errors
	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			fname: "",
			email: "",
			subjectline: "",
			message: "",
		},

		onSubmit: async (values) => {
			setIsLoading(true);

			emailjs
				.sendForm(
					"service_y9779vk",
					"template_a9oczb2",
					form.current,
					"ffEA4ETQ_rX82YGVI"
				)
				.then(
					(result) => {
						console.log(result.text);
						setIsLoading(false); 
						navigate("/messagegreet");
					},
					(error) => {
						console.log(error.text);
						setIsLoading(false); 
						setIsError(true); 
					}
				);
		},
	});

	return (
		<>
			<form
				action=""
				ref={form}
				className="contact"
				onSubmit={handleSubmit}
			>
				<div className="left-contact">
					<div className="name">
						<label htmlFor="name">
							Name
							<input
								type="text"
								name="fname"
								required
								minLength="4"
								maxLength="20"
								onChange={handleChange}
								value={values.fname}
							/>
						</label>
					</div>
					<div className="email">
						<label htmlFor="email">
							Email
							<input
								type="email"
								name="email"
								required
								placeholder=""
								onChange={handleChange}
								value={values.email}
							/>
						</label>
					</div>
					<div className="subject">
						<label htmlFor="subject">
							{" "}
							Subject Line
							<input
								onChange={handleChange}
								value={values.subjectline}
								type="text"
								name="subjectline"
								required
								minLength="4"
								maxLength="80"
								placeholder=""
							/>
						</label>
					</div>

					<div className="message">
						<label>
							{" "}
							Message
							<textarea
								type="text"
								onChange={handleChange}
								value={values.message}
								required
								minLength="10"
								maxLength="1000"
								name="message"
								id="message"
								cols="30"
								rows="6"
							></textarea>
						</label>
					</div>
					<div className="button">
						<button
							type="submit"
							value="Submit"
							className={`submit ${isLoading ? "disabled" : ""}`}
							disabled={isLoading} 
						>
							{isLoading ? "Loading..." : "Submit"}
						</button>
						{isError && (
							<p className="error">Error sending the form.</p>
						)}
					</div>
				</div>
				<div className="right-contact">
					<img src="/img/contact4.png" className="profile" alt="" />
				</div>
			</form>
		</>
	);
}

export default ContactForm;

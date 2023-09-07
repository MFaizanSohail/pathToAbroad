import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

function ContactForm() {
	return (
		<>
			<div className="contact">
				<div className="left-contact">
					<div className="name">
						<label htmlFor="name">
							Name
							<input type="text" placeholder="" />
						</label>
					</div>
					<div className="email">
						<label htmlFor="email">
							Email
							<input type="text" placeholder="" />
						</label>
					</div>
					<div className="subject">
						<label htmlFor="subject">
							{" "}
							Subject Line
							<input type="text" placeholder="" />
						</label>
					</div>

					<div className="message">
						<label>
							{" "}
							Message
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="6"
							></textarea>
						</label>
					</div>
					<div className="button">
						<Link to="/messagegreet">
							<button className="submit">Submit</button>
						</Link>
					</div>
				</div>
				<div className="right-contact">
					<img src="/img/contact4.png" className="profile" alt="" />
				</div>
			</div>
		</>
	);
}

export default ContactForm;

import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Newsletter.scss";

const Newsletter = () => {
	const url =
		"https://gmail.us8.list-manage.com/subscribe/post?u=0c5b9807532cae00d7def18ce&id=b1d8bb849e";

	return (
		<div className="newsletter">
			<div className="newstitle">Subscribe for the latest news</div>
			<div className="newsdesc">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
				tempore laboriosam iste totam maiores quo!
			</div>
      <div className="inputfield">
			<MailchimpSubscribe url={url}>
					{({ subscribe, status, message }) => (
						<div>
							<input
								type="email"
								className="input"
								placeholder="Enter your email"
							/>
							<button
								className="subscribe"
								onClick={() => subscribe()}
							>
								Subscribe
							</button>
							{status === "sending" && <p>Sending...</p>}
							{status === "error" && <p>{message}</p>}
							{status === "success" && (
								<p>Thank you for subscribing!</p>
							)}
						</div>
					)}
			</MailchimpSubscribe>
				</div>
		</div>
	);
};

export default Newsletter;

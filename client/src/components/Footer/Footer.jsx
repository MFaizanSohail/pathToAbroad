import React from "react";
import "./Footer.scss";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
	return (
		<div className="footer">
			<div className="left-f">
				<div className="aboutus">
					<div className="abouttitle">About us</div>
					<div className="aboutdesc">
						Our platform empowers bloggers and organizations to
						share insights seamlessly. We provide verified source
						tags, visa guidance, and personalized eligibility
						checks, fostering a vibrant community of informed
						contributors.
					</div>
				</div>
				<ul className="pagelinks">
					<li>Home</li>
					<li>Contact us</li>
					<li>Visa</li>
					<li>Universities</li>
					<li>Privacy policy</li>
					<li>Disclaimer</li>
					<li>Term & conditions</li>
				</ul>
			</div>
			<div className="right-f">
				<Newsletter />{" "}
			</div>
		</div>
	);
};

export default Footer;

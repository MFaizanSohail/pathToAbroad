import React from "react";
import "./CountryVisa.scss";
import { Button } from "@mui/material";

const CountryVisa = () => {
	return (
		<>
			<div className="visa-country">
				<h2>Germany visa</h2>
			</div>
			<div className="visa-tags">
				{" "}
				<h3>Tags :</h3>
				<Button size="small" variant="outlined">
					Outlined
				</Button>{" "}
				<Button size="small" variant="outlined">
					Outlined
				</Button>
				<Button size="small" variant="outlined">
					Outlined
				</Button>
			</div>
			<div className="visa-policy">
				<div className="policy">
					<img src="/img/blog-banner-34-1-696x392.png" alt="" />
					<div className="visa-title">
						Lorem, ipsum dolor sit amet
					</div>
				</div>
				<div className="policy">
					<img src="/img/blog-banner-48-1-696x392.png" alt="" />
					<div className="visa-title">
						Lorem, ipsum dolor sit amet
					</div>
				</div>
				<div className="policy">
					<img src="/img/blog-banner-34-1-696x392.png" alt="" />
					<div className="visa-title">
						Lorem, ipsum dolor sit amet
					</div>
				</div>
			</div>
		</>
	);
};

export default CountryVisa;

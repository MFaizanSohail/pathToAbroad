import React from "react";
import { Box, Typography, InputBase, Grid, FormControl } from "@mui/material";
import "./Filters.scss";
import CountrySelect from "../CountryList/CountryList";
import StatusSelect from "../StatusSelect/StatusSelect";

const Filters = () => {
	return (
		<Box className="blogfilters">
			<Typography variant="h2" className="title">
				Filters
			</Typography>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} sm={4}>
					<FormControl variant="outlined" fullWidth>
						<InputBase
							fullWidth
							labelId="Search-label"
							id="Search"
							placeholder="Search..."
							label="Status"
							inputProps={{ "aria-label": "search" }}
							style={{
								paddingLeft: "0.5rem",
								borderBottom: "1px solid #ced4da",
								borderLeft: "1px solid #ced4da",
							}}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={4}>
					<CountrySelect />
				</Grid>

				<Grid item xs={12} sm={4}>
					<StatusSelect value="" onChange={(event) => {}} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Filters;

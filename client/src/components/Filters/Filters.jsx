import React from "react";
import {
	Box,
	Typography,
	InputBase,
	Grid,
	FormControl,
	MenuItem,
	Select,
} from "@mui/material";
import "./Filters.scss";

const Filters = () => {
	return (
		<Box className="blogfilters">
			<Typography variant="h2" className="title">
				Filters
			</Typography>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} sm={6} md={4}>
					<FormControl fullWidth variant="outlined">
						<InputBase
							fullWidth
							placeholder="Search..."
							variant="outlined"
							size="small"
							/* Add your search functionality here */
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FormControl fullWidth variant="outlined">
						<Select
							fullWidth
							label="Country"
							size="small"
							variant="outlined"
							/* Add your country dropdown options here */
						>
							<MenuItem value="">All</MenuItem>
							<MenuItem value="USA">USA</MenuItem>
							<MenuItem value="UK">UK</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<FormControl fullWidth variant="outlined">
						<Select
							fullWidth
							label="Status"
							size="small"
							variant="outlined"
						>
							<MenuItem value="">All</MenuItem>
							<MenuItem value="draft">Draft</MenuItem>
							<MenuItem value="public">Public</MenuItem>
							<MenuItem value="private">Private</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Filters;

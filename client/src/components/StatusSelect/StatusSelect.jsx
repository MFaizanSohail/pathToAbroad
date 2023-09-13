import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function StatusSelect({ value, onChange }) {
	return (
		<FormControl variant="outlined" fullWidth>
			<InputLabel id="status-label">Status</InputLabel>
			<Select
				fullWidth
				labelId="status-label"
				id="status"
				value={value}
				onChange={onChange}
				label="Status"
			>
				<MenuItem value="">All</MenuItem>
				<MenuItem value="draft">Draft</MenuItem>
				<MenuItem value="public">Public</MenuItem>
				<MenuItem value="private">Private</MenuItem>
			</Select>
		</FormControl>
	);
}

export default StatusSelect;

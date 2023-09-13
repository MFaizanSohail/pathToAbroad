import React, { useState, useEffect } from "react";
import { Typography, Container, Button, TextField } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Autocomplete, CircularProgress } from "@mui/material";
import axios from "axios";
import { userTokenID } from "../../utility/auth";
import "./Createblog.scss";

const Createblog = () => {
	const [image, setImage] = useState("");
	const [organizationslist, setOrganizationslist] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	// State variables for form values
	const [titleValue, setTitleValue] = useState("");
	const [descriptionValue, setDescriptionValue] = useState("");
	const [eligibilityValue, setEligibilityValue] = useState("");
	const [detailsValue, setDetailsValue] = useState("");
	const [applyingProcessValue, setApplyingProcessValue] = useState("");
	const [deadlineValue, setDeadlineValue] = useState("");
	const [benefitsValue, setBenefitsValue] = useState("");
	const [selectedOrganization, setSelectedOrganization] = useState("");
	const [selectedOrganizationId, setSelectedOrganizationId] = useState("");
	const [organizationsData, setOrganizationsData] = useState([]);

	const [status, setStatus] = useState("draft");

	const fetchOrganizations = async () => {
		setLoading(true);
		try {
			// Fetch organizations from the API
			const response = await axios.get(
				"http://localhost:4000/organization/getOrganization"
			);
			const organizationsData = response.data; // Assuming the response is an array of organizations

			// Extract organization names and IDs
			const organizationNames = organizationsData.map((org) => org.name);
			const organizationIds = organizationsData.map((org) => org._id);
			// Create an array of objects with name and id pairs
			const organizationsWithIds = organizationNames.map(
				(name, index) => ({
					name,
					id: organizationIds[index],
				})
			);

			setOrganizationslist(organizationNames);
			setOrganizationsData(organizationsWithIds); // Set the linked data
			// console.log(organizationNames);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching organizations:", error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchOrganizations();
	}, []);

	const handleStatusChange = (event) => {
		setStatus(event.target.value);
	};

	const handleCreate = async () => {
		setIsSaving(true);
		const userID = userTokenID();

		const formData = new FormData();
		formData.append("title", titleValue);
		formData.append("description", descriptionValue);
		formData.append("eligibility", eligibilityValue);
		formData.append("details", detailsValue);
		formData.append("applyingProcess", applyingProcessValue);
		formData.append("deadline", deadlineValue);
		formData.append("benefits", benefitsValue);
		formData.append("organization", selectedOrganizationId); // Use selectedOrganizationId here
		formData.append("user", userID);
		formData.append("status", status);
		formData.append("image", image[0]);

		console.log("formData before sending:", formData);

		try {
			console.log(formData.data)
			await axios.post("http://localhost:4000/blog/create", formData, {
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data", // Set the content type for FormData
				},
			});
			setIsSaving(false);
			setImage([]); // Clear the selected images
			setStatus("draft");
		} catch (error) {
			console.error("Error saving data:", error);
			setIsSaving(false);
		}
	};

	return (
		<>
			<Navbar />
			<Container className="createblog">
				<Typography variant="h4" className="bloghead">
					Create Blog
				</Typography>
				<div className="textfield-mui">
					<TextField
						variant="outlined"
						label="Title"
						fullWidth
						multiline
						rows={3}
						className="title"
						value={titleValue}
						onChange={(e) => setTitleValue(e.target.value)}
					/>
					<TextField
						variant="outlined"
						label="Description"
						fullWidth
						multiline
						rows={3}
						className="description"
						value={descriptionValue}
						onChange={(e) => setDescriptionValue(e.target.value)}
					/>
					<TextField
						variant="outlined"
						label="Eligibility"
						fullWidth
						multiline
						rows={3}
						className="eligibility"
						value={eligibilityValue}
						onChange={(e) => setEligibilityValue(e.target.value)}
					/>
					<TextField
						variant="outlined"
						label="Details"
						fullWidth
						multiline
						rows={3}
						className="details"
						value={detailsValue}
						onChange={(e) => setDetailsValue(e.target.value)}
					/>
					<TextField
						variant="outlined"
						label="Appling Process"
						fullWidth
						multiline
						rows={3}
						className="appling-process"
						value={applyingProcessValue}
						onChange={(e) =>
							setApplyingProcessValue(e.target.value)
						}
					/>
					<TextField
						variant="outlined"
						label="Deadline"
						fullWidth
						multiline
						rows={3}
						className="deadline"
						value={deadlineValue}
						onChange={(e) => setDeadlineValue(e.target.value)}
					/>
					<TextField
						variant="outlined"
						label="Benefits"
						fullWidth
						multiline
						rows={3}
						className="benefits"
						value={benefitsValue}
						onChange={(e) => setBenefitsValue(e.target.value)}
					/>
					<Autocomplete
						options={organizationslist}
						loading={loading}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Organization"
								variant="outlined"
								InputProps={{
									...params.InputProps,
									endAdornment: (
										<>
											{loading ? (
												<CircularProgress
													color="inherit"
													size={20}
												/>
											) : null}
											{params.InputProps.endAdornment}
										</>
									),
								}}
							/>
						)}
						value={selectedOrganization}
						onChange={(event, newValue) => {
							setSelectedOrganization(newValue);
							console.log("Event = ", event, newValue);
							const selectedOrgData = organizationsData.find(
								(org) => org.name === newValue
							);
							if (selectedOrgData) {
								setSelectedOrganizationId(selectedOrgData.id); // Set the organizationId here
							} else {
								setSelectedOrganizationId(""); // Handle the case where no organization is selected
							}
						}}
					/>
				</div>
				<div className="bottom-section">
					<div className="selectstatus">
						<FormControl variant="outlined" fullWidth>
							<InputLabel id="status-label">Status</InputLabel>
							<Select
								labelId="status-label"
								id="status"
								value={status}
								onChange={handleStatusChange}
								label="Status"
							>
								<MenuItem value="draft">Draft</MenuItem>
								<MenuItem value="public">Public</MenuItem>
								<MenuItem value="private">Private</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="imgupload">
						<label className="custom-file-upload">
							<input
								type="file"
								onChange={(e) => setImage([e.target.files[0]])}
							/>
							Upload Image: {image ? image.name : ""}
							<span
								style={{ backgroundColor: image && "black" }}
							></span>
						</label>
					</div>
				</div>
				<div className="createbtn">
					<Button
						variant="contained"
						color="primary"
						onClick={handleCreate}
						disabled={isSaving}
					>
						{isSaving ? <CircularProgress size={24} /> : "Create"}
					</Button>
				</div>
			</Container>
		</>
	);
};

export default Createblog;

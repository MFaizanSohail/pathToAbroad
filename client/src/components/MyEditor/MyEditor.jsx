import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import "./MyEditor.scss";

function MyEditor() {
	const [editorData, setEditorData] = useState("");
	const [title, setTitle] = useState("");
	const [isSaving, setIsSaving] = useState(false);
	const [navigateToHome, setNavigateToHome] = useState(false);

	const handleEditorChange = (event, editor) => {
		const data = editor.getData();
		setEditorData(data);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSaveClick = () => {
		if (!editorData || !title) {
			alert("Please enter both title and content before saving.");
			return;
		}

		setIsSaving(true);

		axios
			.post("http://localhost:4000/blogs/create", {
				title,
				content: editorData,
			})
			.then((response) => {
				console.log("Data saved successfully:", response.data);
				setIsSaving(false);
				setNavigateToHome(true); // Set flag to navigate to home page after saving
			})
			.catch((error) => {
				console.error("Error saving data:", error);
				setIsSaving(false);
			});
	};

	if (navigateToHome) {
		return <Navigate to="/bloglist" />; // Navigate to home page
	}

	return (
		<div className="Editor" style={{ margin: "10px" }}>
			<h2 style={{ margin: "inherit" }}>
				Using CKEditor 5 build in React
			</h2>
			<TextField
				label="Title"
				variant="outlined"
				fullWidth
				value={title}
				onChange={handleTitleChange}
				style={{ marginBottom: "10px" }}
			/>
			<CKEditor
				editor={ClassicEditor}
				data={editorData}
				onChange={handleEditorChange}
				style={{ height: "100%" }}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={handleSaveClick}
				disabled={isSaving}
				style={{ marginTop: "10px" }}
			>
				{isSaving ? <CircularProgress size={24} /> : "Save"}
			</Button>
		</div>
	);
}

export default MyEditor;

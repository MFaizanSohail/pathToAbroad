import React, { useState } from "react";
import "./Profile.scss";
import { IconButton, MenuItem } from "@mui/material";
import ProfileModal from "../ProfileModal/ProfileModal";
import { logout } from "../../utility/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [menuAnchor, setMenuAnchor] = useState(null);
	const navigate = useNavigate();

	const handleMenuToggle = () => {
		setMenuVisible(!menuVisible);
	};

	const handleMenuClose = () => {
		setMenuAnchor(null);
		handleMenuToggle();
	};

	const handleProfile  = () => {
		handleMenuClose();
		setModalOpened(true);
	};

	
	const handleDashboard = () => {
		navigate("/dashboard");
		handleMenuClose();
	  };

	const handleLogout = () => {
		logout();
		window.location.reload();
	};

	return (
		<div className="navbar-profile">
			<IconButton
				className="profile-container"
				size="large"
				onClick={handleMenuToggle}
			>
				<img className="profile" src="/img/contact.png" alt="" />
			</IconButton>
			<div
				className={`profile-menu ${
					menuVisible ? "visible" : "invisible"
				}`}
				style={{ top: menuAnchor ? menuAnchor.clientHeight : "auto" }}
			>
				<MenuItem className="dropdown-menu" onClick={handleProfile}>
					Profile
				</MenuItem>
				<MenuItem className="dropdown-menu" onClick={handleDashboard}>
					Dashboard
				</MenuItem>
				<MenuItem className="dropdown-menu" onClick={handleLogout}>
					Logout
				</MenuItem>
			</div>
			<ProfileModal
				modalOpened={modalOpened}
				setModalOpened={setModalOpened}
			/>
		</div>
	);
};

export default Profile;

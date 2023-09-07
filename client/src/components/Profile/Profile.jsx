import React, { useState } from "react";
import "./Profile.scss";
import { IconButton, MenuItem } from "@mui/material";
import ProfileModal from "../ProfileModal/ProfileModal";
import { logout } from "../../utility/auth";

const Profile = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [menuAnchor, setMenuAnchor] = useState(null);

	const handleMenuToggle = () => {
		setMenuVisible(!menuVisible);
	};

	const handleMenuClose = () => {
		setMenuAnchor(null);
		handleMenuToggle();
	};

	const handleEvents = () => {
		handleMenuClose();
		setModalOpened(true);
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
				<MenuItem className="dropdown-menu" onClick={handleEvents}>
					Profile
				</MenuItem>
				<MenuItem className="dropdown-menu" to="/dashboard">
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

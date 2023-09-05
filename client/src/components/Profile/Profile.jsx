import React, { useState } from "react";
import "./Profile.scss";
import { IconButton, Menu, MenuItem } from "@mui/material";
import ProfileModal from "../ProfileModal/ProfileModal";

const Profile = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEvents=()=>{
    handleClose()
    setModalOpened(true);
  }

  return (
    <div className="navbar-profile">
      <IconButton
        className="profile-container"
        size="large"
        onClick={handleMenu}
      >
        <img className="profile" src="/img/contact.png" alt="" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEvents}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default Profile;

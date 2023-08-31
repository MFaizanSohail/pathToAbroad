import React, { useState } from "react";
import "./Navbar.scss";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom"; 
import Muinavbar from "../Muinavbar/Muinavbar"; 
import { useSelector } from "react-redux";

const Navbar = ({ signup }) => {
  // const [login,setLogin]=useState(true)
  const {isAuthenticated}=useSelector((state)=> state.root)
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Muinavbar className="muinavbar"/>
          <div className="logo">
            <Link to="/">
              <img src={"../../img/logowhite.png"} alt="" />
            </Link>
          </div>
          {signup ? (
            <h1 className="signlog">{signup}</h1>
          ) : (
            <div className="nav">
              <ul className="navitems">
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/about"> About us</Link>
                </li>
                <li>
                  <Link to="/visa"> Visa </Link>
                </li>
                <li>
                  <Link to="/university">University</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              {isAuthenticated && <>  <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li><img className="profile" src="/img/contact.png" alt="" /></li></>}
              </ul>
              {!isAuthenticated && <div className="logButtons">
                <Button className="signup" color="inherit">
                  <Link to="/signup">Sign Up </Link>
                </Button>
                <Button className="signin" color="inherit">
                  <Link to="/login">Sign In </Link>
                </Button>
              </div>}
            
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// import logo from '../../img/path-to-abroad-logo-removebg-preview.png'

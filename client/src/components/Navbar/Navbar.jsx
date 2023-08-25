import React from "react";
import "./Navbar.scss";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({signup}) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography className="logo" variant="h6" component="div">
            <img src={'../../img/logowhite.png'} alt="" />
          </Typography>
          {signup? <h1>{signup}</h1> : <div className="nav">
            <ul className="navitems">
              <li><Link to='/'> Home </Link></li>
              <li><Link to='/about'> About us</Link></li>
              <li><Link to='/visa'> Visa </Link></li>
              <li><Link to='/university'>University</Link></li>
              <li><Link to='/contact'>Contact us</Link></li>
            </ul>
            <div className="logButtons">
              <Button className="signup" color="inherit">Sign Up</Button>
              <Button className="signin" color="inherit">Sign In</Button>
            </div>
          </div>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// import logo from '../../img/path-to-abroad-logo-removebg-preview.png'

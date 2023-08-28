import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mobilenav.scss";

const Mobilenav = ({handleMobileOpen,mobileOpen}) => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="mobnav" >
        <ul className="mobnavitems">
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
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mobsignup">
            <Link to="/signup">Sign Up </Link>
          </li>
          <li className="mobsignin">
            <Link to="/login">Sign In </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;

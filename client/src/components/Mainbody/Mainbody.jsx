import React from "react";
import "./Mainbody.scss";
import { ListItem, Stack } from "@mui/material";
import Blogsection from "../Blogsection/Blogsection";
import Sidebar from "../Sidebar/Sidebar";

const Mainbody = () => {
  return (
    <div className="mainbody">
      <div className="main-left">
        <Blogsection />
      </div>
      <div className="main-right">
        <Sidebar />
      </div>
    </div>
  );
};

export default Mainbody;

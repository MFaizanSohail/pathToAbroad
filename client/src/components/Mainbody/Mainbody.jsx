import React from "react";
import "./Mainbody.scss";
import { Divider, ListItem, Stack } from "@mui/material";
import Blogsection from "../Blogsection/Blogsection";
import Sidebar from '../Sidebar/Sidebar'

const Mainbody = () => {
  return (
    <Stack m={5}
      direction="row"
      spacing={2}
    >
      <ListItem sx={{flex:3}}><Blogsection/></ListItem>
      <ListItem sx={{flex:1.1,height:'100%'}}><Sidebar/></ListItem>
    </Stack>
  );
};

export default Mainbody;

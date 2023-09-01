import React from "react";
import "./Mainbody.scss";
import {  ListItem, Stack } from "@mui/material";
import Blogsection from "../Blogsection/Blogsection";
import Sidebar from '../Sidebar/Sidebar'

const Mainbody = () => {
  return (
    <Stack m={0} className="mainbody"
      gap={'6.3rem'}
      spacing={0} sx={{flexDirection:{xs:'column',sm:'row'}, margin:{xs:0,sm:5}}}
    >
      <ListItem sx={{flex:7}}><Blogsection/></ListItem>
      <ListItem sx={{flex:3, height:'100%'}}><Sidebar/></ListItem>
    </Stack>
  );
};

export default Mainbody;

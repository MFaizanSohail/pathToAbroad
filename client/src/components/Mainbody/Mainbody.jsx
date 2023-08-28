import React from "react";
import "./Mainbody.scss";
import { Divider, ListItem, Stack } from "@mui/material";
import Blogsection from "../Blogsection/Blogsection";
import Sidebar from '../Sidebar/Sidebar'

const Mainbody = () => {
  return (
    <Stack m={5} className="mainbody"
      gap={3}
      spacing={2} sx={{flexDirection:{xs:'column',sm:'row'},margin:{xs:'0',sm:5}}}
    >
      <ListItem sx={{flex:3}}><Blogsection/></ListItem>
      <ListItem sx={{flex:1.1,height:'100%'}}><Sidebar/></ListItem>
    </Stack>
  );
};

export default Mainbody;

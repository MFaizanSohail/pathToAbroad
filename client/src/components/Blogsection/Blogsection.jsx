import React, { useEffect } from "react";
import "./Blogsection.scss";
import Blog from "../Blog/Blog";
import { NavLink } from "react-router-dom";

const Blogsection = () => {
 
  return (
    <div className="blogsection">
     <NavLink style={{textDecoration:'none',color:'inherit'}} to={'/singleblog/1'}> <Blog /> </NavLink> 
    </div>
  );
};

export default Blogsection;

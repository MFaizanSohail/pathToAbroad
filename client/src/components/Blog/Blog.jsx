import React, { useState } from "react";
import "./Blog.scss";
import { Button } from "@mui/material";
import { data } from "../StaticData/data";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {data.map((blog) => (
        <NavLink key={blog.id} style={{textDecoration:'none',color:'inherit'}} to={`/singleblog/${blog.id}`}>
          <div className="blog" >
            <div className="title">
              <h1>{blog.title}</h1>
            </div>
            <div className="tags">
              {" "}
              Tags :
              <Button size="small" variant="outlined">
                {blog.tag.country}
              </Button>{" "}
              <Button size="small" variant="outlined">
                {blog.tag.opurtunity}
              </Button>
              <Button size="small" variant="outlined">
                {blog.tag.university}
              </Button>{" "}
            </div>
            <div className="blogdetails">
              <span className="blogtext">{blog.desc.slice(0, 600)}...</span>
              <img src={blog.img} className="blogimg" alt="" />
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Blog;

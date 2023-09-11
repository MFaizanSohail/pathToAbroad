import React, { useEffect, useState } from "react";

import "./Blog.scss";
import { Button } from "@mui/material";
// import { data } from "../StaticData/data";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { fetchBlogs } from "../../reduxToolkit/blogsReducer";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../reduxToolkit/blogsReducer";
import Spiner from "../Spiner/Spiner";



const Blog = () => {
  const dispatch = useDispatch();
  const { blogsData, status } = useSelector((state) => state.blogs);


  console.log(blogsData, status);

  useEffect(() => {
    
    dispatch(fetchBlogs());
  }, []);

  if (status == STATUSES.LOADING) { 
    return (
      <div className="loading">
        <Spiner />
      </div>
    );
  }

  return (
    <>
      {blogsData?.map((blog, i) => (
        <NavLink
          key={i}
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/singleblog/${blog._id}`}
        >
          <div className="blog">
            <div className="title">
              <h1>{blog?.title.slice(0, 60)}...</h1>
            </div>
            <div className="tags">
              {" "}
              Tags :
              <Button size="small" variant="outlined">
                America
              </Button>{" "}
              <Button size="small" variant="outlined">
                Internship
              </Button>
              <Button size="small" variant="outlined">
                Harvard University
              </Button>{" "}
            </div>
            <div className="blogdetails">
              <span className="blogtext">
                {blog.description?.slice(0, 600)}...
              </span>
              <img src={blog?.imageUrl} className="blogimg" alt="" />
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Blog;

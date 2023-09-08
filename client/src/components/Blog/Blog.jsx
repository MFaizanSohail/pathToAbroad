import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Button } from "@mui/material";
// import { data } from "../StaticData/data";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";
import { useDispatch } from "react-redux";


const Blog = () => {
  const [data,setData]=useState([]);
  const dispatch = useDispatch();
 const getData=()=>{
  axios.get('http://localhost:4000/blog/')
  .then((res)=> {
    setData(res.data) 
  })
  .catch(function (error) { 
    console.log(error);
  })
 }

 useEffect(()=>{
  getData()
  fetchBlogs()
 },[])
  return (
    <>
      {data.map((blog,i) => (
        <NavLink key={i} style={{textDecoration:'none',color:'inherit'}} to={`/singleblog/${blog.id}`}>
          <div  className="blog" >
            <div className="title">
              <h1>{blog?.title.slice(0,60)}...</h1>
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
              <span className="blogtext">{blog.description?.slice(0, 600)}...</span>
              <img src={blog?.imageUrl} className="blogimg" alt="" />
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Blog;

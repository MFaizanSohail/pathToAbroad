import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Button } from "@mui/material";
// import { data } from "../StaticData/data";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Blog = () => {
  const [data,setData]=useState([])
  console.log(data);

 const getData=()=>{
  axios.get('http://localhost:4000/blog/')
  .then((res)=> {
    setData(res.data) 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 }

 useEffect(()=>{
  getData()
 },[])
  return (
    <>
      {data.map((blog,id) => (
        <NavLink key={id} style={{textDecoration:'none',color:'inherit'}} to={`/singleblog/${blog.id}`}>
          <div  className="blog" >
            <div className="title">
              <h1>{blog?.title}</h1>
            </div>
            <div className="tags">
              {" "}
              Tags :
              <Button size="small" variant="outlined">
                {blog.tag?.country}
              </Button>{" "}
              <Button size="small" variant="outlined">
                {blog.tag?.opurtunity}
              </Button>
              <Button size="small" variant="outlined">
                {blog.tag?.university}
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

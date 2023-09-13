import React, { useEffect, useState } from "react";
import "./Singleblog.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
// import { data } from "../StaticData/data";
import { useSelector } from "react-redux";
import { STATUSES } from "../../reduxToolkit/blogsReducer";
import Spiner from "../Spiner/Spiner";

const Singleblog = () => {
  const { id } = useParams();
  const [myBlog, setMyBlog] = useState([]);
  const { blogsData, status } = useSelector((state) => state.blogs);

  const fetchThroughId = () => {
    // const numericId = parseInt(id);

    let cntBlg = blogsData.filter((item) => item._id === id);
    setMyBlog(cntBlg);
  };

  useEffect(() => {
    fetchThroughId();
  }, [id]);

  console.log("myBlog:", myBlog);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  if (status == STATUSES.LOADING) { 
    return (
      <div className="loading">
        <Spiner />
      </div>
    );
  }
  return (
    <>
      {myBlog.map((blog, id) => (
        <div key={id} className="singleblog">
          <div className="myblog">
            <h2 className="title">{blog.title.slice(0,200)}</h2>
            <div className="blogtags">
              Tags :
              <Button size="small" variant="outlined">
                {blog.tag?.country || "American"}
              </Button>{" "}
              <Button size="small" variant="outlined">
                {blog.tag?.opurtunity || "Internship"}
              </Button>
              <Button size="small" variant="outlined">
                {blog.tag?.university || "Harvard"}
              </Button>
            </div>
            <div className="blogauthor">
              <img src="/img/contact3.png" alt="" />
              <div className="name">{blog?.author}</div>
              <div className="timestamps">March 20,2023</div>
            </div>
            <div className="blogimg">
              <img src={blog?.imageUrl} alt="" />
            </div>
            <div className="blogdesc">{blog?.description}</div>
            <div className="details">
              <h2 className="title">Details</h2>
              <ul>{blog?.details}</ul>
            </div>
            <div className="elegibility">
              <h2 className="title">Elegibility and criteria</h2>
              <ul>{blog?.eligibility}</ul>
            </div>
            <div className="benifits">
              <h2 className="title">Benifits and others</h2>
              <ul>{blog?.benefits}</ul>
            </div>
            <div className="howtoapply">
              <h2 className="title">
                Here is the criteria for applying on this post
              </h2>
              <ul>{blog?.applyingProcess}</ul>
            </div>
            <div className="deadline">
              <h2 className="title">Deadline</h2>
              <p className="para">{blog?.deadline}</p>
            </div>
          </div>
          <Sidebar className="sidebar" />
        </div>
      ))}
    </>
  );
};

export default Singleblog;

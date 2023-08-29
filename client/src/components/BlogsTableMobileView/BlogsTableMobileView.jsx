import React from "react";
import "./BlogsTableMobileView.scss";

const BlogsTableMobileView = () => {
  return (
    <>
      <div className="filterContainer">
        <div className="container"> 
        <div className="title">
          <span>Title</span>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="country">
          <span>Country</span>
          <span>France</span>
        </div>
        <div className="status">
          <span>Status</span>
          <span>Private</span>
        </div>
        <div className="last-update">
          <span>Last-Update</span>
          <span>9:30 18/8/2023</span>
        </div>
        </div>
        <div className="actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      </div>
      
    </>
  );
};

export default BlogsTableMobileView;

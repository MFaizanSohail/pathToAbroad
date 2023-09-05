import React from "react";
import "./BlogsTableMobileView.scss";

const BlogsTableMobileView = () => {
  return (
    <>
      <div className="filterContainer"> 
        <div className="container">
          <div className="title">
            <div style={{width: "70%"}}>Lorem ipsum dolor sit amet.</div>
            <div>18/8/2023</div>
          </div>
          <div className="country">
            <div  style={{width: "70%"}}>France</div>
            <div>Draft</div>
          </div>
        <div className="actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default BlogsTableMobileView;

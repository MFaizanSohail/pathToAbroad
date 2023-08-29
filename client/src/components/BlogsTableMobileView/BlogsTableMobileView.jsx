import React from "react";
import "./BlogsTableMobileView.scss";

const BlogsTableMobileView = () => {
  return (
    <>
      <div className="filterContainer">
        <div className="container">
          <div className="title">
            <span>Lorem ipsum dolor sit amet.</span>
            <span>18/8/2023</span>
          </div>
          <div className="country">
            <span>France</span>
            <span>Draft</span>
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

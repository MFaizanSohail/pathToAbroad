import React from "react";
import "./BlogsTableMobileView.scss";

const BlogsTableMobileView = ({blogsData,nextPg}) => {
  return (
    <>
      {blogsData?.map((item,i)=>(<div key={i} className="filterContainer"> 
        <div className="container">
          <div className="title">
            <div style={{width: "70%"}}> {item.title.slice(0,30)}...</div>
            <div>{item.updatedDate.slice(0,10)}</div>
          </div>
          <div className="country">
            <div  style={{width: "70%"}}>France</div>
            <div>{item.status}</div>
          </div>
        <div className="actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </div>
      </div>)).slice(nextPg - 10, nextPg)}
    </>
  );
};

export default BlogsTableMobileView;

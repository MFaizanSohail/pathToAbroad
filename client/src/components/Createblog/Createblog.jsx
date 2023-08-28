import React, { useState } from "react";
import "./Createblog.scss";
import Navbar from "../Navbar/Navbar";

const Createblog = () => {
  const [image,setImage]=useState('')
  return (
    <>
      <Navbar />
      <div className="createblog">
        <div className="bloghead">
          <h2>Create Blog</h2>
        </div>
        <div className="title">
          <textarea name="title" id="" cols="30" rows="6" placeholder="Title" />
        </div>
        <div className="description">
          <textarea
            name="description"
            id=""
            cols="30"
            rows="6"
            placeholder="Description"
          />
        </div>
        <div className="elegibility">
          <textarea
            name="elegibility"
            id=""
            cols="30"
            rows="6"
            placeholder="Elegibility Criteria"
          />
        </div>
        <div className="details">
          <textarea
            name="details"
            id=""
            cols="30"
            rows="6"
            placeholder="Details"
          />
        </div>
        <div className="howtoapply">
          <textarea
            name="howtoapply"
            id=""
            cols="30"
            rows="6"
            placeholder="Hot To Apply"
          />
        </div>
        <div className="benifits">
          <textarea
            name="benifits"
            id=""
            cols="30"
            rows="6"
            placeholder="Benifits"
          />
        </div>
        <div className="deadline">
          <textarea
            name="deadline"
            id=""
            cols="30"
            rows="6"
            placeholder="Deadline"
          />
        </div>
        <div className="imgupload">
          <label class="custom-file-upload">
            <input value={image} onChange={(e)=> setImage(e.target.value)} type="file" />
            Upload Image : {image} <span style={{  backgroundColor: image && 'black'}}></span>
          </label>
        </div>
        <div className="createbtn">
          <button>Create</button>
        </div>
      </div>
    </>
  );
};

export default Createblog;

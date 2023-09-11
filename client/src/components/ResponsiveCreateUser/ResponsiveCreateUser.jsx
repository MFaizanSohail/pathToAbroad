import { InputBase } from "@mui/material";
import React from "react";

const ResponsiveCreateUser = ({ users,Deletemsg,modalOpened,setModalOpened,deleteModalOpened,setDeleteModalOpened,ProfileModal }) => {
  return (
    <>
      <div className="filterContainer">
        <div
          className="search"
          style={{
            width: "100%",
            border: "2px solid #19a7ce",
            margin: "0 auto",
          }}
        >
          {" "}
          <InputBase
            placeholder="Search with email address"
            sx={{ width: "75%", borderRight: "2px solid #19a7ce" }}
          />{" "}
          <span style={{ marginLeft: "1rem" }}>Search</span>
        </div>
        {users.map((item,i)=>(<div key={i} className="container">
          <div className="title">
            <span>{item.name}</span>
            <span>{item.email}</span>
          </div>
          <div className="country">
            <span>{item.type}</span>
            <span>{item.createDate}</span>
          </div>
          <div className="actions">
            <button onClick={()=> setModalOpened(true)}>Edit</button>
            <button onClick={()=>setDeleteModalOpened(true)}>Delete</button>
          </div>
        </div>))}
      </div>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Deletemsg deleteModalOpened={deleteModalOpened} setDeleteModalOpened={setDeleteModalOpened}/>
    </>
  );
};

export default ResponsiveCreateUser;

import { InputBase, Pagination, Stack } from "@mui/material";
import React from "react";

const ResponsiveCreateUser = ({nextPg,setNextPg,userId, users,Deletemsg,modalOpened,setModalOpened,deleteModalOpened,setDeleteModalOpened,ProfileModal }) => {
  const handlePagination=(e,p)=>{
    console.log(p);
    setNextPg(p*5)
  }

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
        {users.map((item,i)=>(<div key={i} className="container" style={{margin:'2rem 0'}}>
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
        </div>)).slice(nextPg - 5, nextPg)}
        <div className="pagination">
          <Stack spacing={2}>
              <Pagination className="" color="primary" count={Math.ceil((users.length)/5)} onChange={handlePagination}/>
            </Stack>
          </div>
      </div>
      
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Deletemsg userId={userId} userDelete={true} deleteModalOpened={deleteModalOpened} setDeleteModalOpened={setDeleteModalOpened}/>
    </>
  );
};

export default ResponsiveCreateUser;

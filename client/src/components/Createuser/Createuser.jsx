import React, { useEffect, useState } from "react";
import "./Createuser.scss"; 

import Navbar from "../Navbar/Navbar";
import {
  Button,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ResponsiveCreateUser from "../ResponsiveCreateUser/ResponsiveCreateUser";
import axios from "axios";
import ProfileModal from "../ProfileModal/ProfileModal";
import Deletemsg from '../ProfileModal/Deletemsg'
import Filters from "../Filters/Filters";

const Createuser = () => {
  const [nextPg, setNextPg] = useState(5); 
  const handlePagination=(e,p)=>{
    console.log(p);
    setNextPg(p*5)
  }
  const [modalOpened, setModalOpened] = useState(false); 
  const [deleteModalOpened, setDeleteModalOpened] = useState(false); 
  const [userId, setUserId] = useState(null); 
  const handleDelete=(id)=>{
    setUserId(id)
    setDeleteModalOpened(true)
  }

  const handleEvents = () => {
    setModalOpened(true);
  };

  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    axios
      .get(`http://localhost:4000/admin/`)
      .then((res) => {
        setUsers(res.data);
        console.log(users);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []); 

  return (
    <>
      <Navbar />
      <div className="blogdashboard">
        <div
          className="createuser"
          style={{ textAlign: "center", fontSize: "1.4rem" }}
        >
          <h1>User</h1>
        </div>
        <ResponsiveCreateUser setNextPg={setNextPg} nextPg={nextPg} Deletemsg={Deletemsg} modalOpened={modalOpened} setModalOpened={setModalOpened} userId={userId}
         deleteModalOpened={deleteModalOpened} ProfileModal={ProfileModal} setDeleteModalOpened={setDeleteModalOpened} users={users} />
        <div className="blogbody">
          <div className="blogfilters" style={{marginBottom:'2rem'}}> 
          <Filters/>
          </div>
          <div className="table">
            <TableContainer sx={{ p: "2rem" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "18px",
                      }}
                      align="right"
                    >
                      Email
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      align="right"
                    >
                      Type
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      align="right"
                    >
                      Last update
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      align="right"
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users
                    .map((item, i) => (
                      <TableRow key={i}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.type}</TableCell>
                        <TableCell align="right">{item.createDate}</TableCell>
                        <TableCell align="right">
                          <Button id="edit" onClick={handleEvents}>Edit</Button>
                          <Button id="deletebtn" onClick={()=>handleDelete(item._id)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))
                    .slice(nextPg - 5, nextPg)}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="pagination">
          <Stack spacing={2}>
              <Pagination className="" color="primary" count={Math.ceil((users.length)/5)} onChange={handlePagination}/>
            </Stack>
          </div>
        </div>
      </div>
      <ProfileModal getAllUsers={getAllUsers} modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Deletemsg userDelete={true} getAllUsers={getAllUsers} userId={userId} deleteModalOpened={deleteModalOpened} setDeleteModalOpened={setDeleteModalOpened}/>
    </>
  );
};

export default Createuser;

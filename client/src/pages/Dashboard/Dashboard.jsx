import React, { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import BlogsTableMobileView from "../../components/BlogsTableMobileView/BlogsTableMobileView";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import Deletemsg from '../../components/ProfileModal/Deletemsg'



const Dashboard = () => { 
  const { blogsData } = useSelector((state) => state.blogs); 
  const [nextPg, setNextPg] = useState(3);
  let pg = 1;
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

 
  const [verified, setVerified] = useState(true);


  return (
    <>
      <Navbar />
      <div className="blogdashboard">
        {verified && (
          <div className="verified">
            <Button variant="outlined" size="small">
              Verified
            </Button>{" "}
            :{" "}
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: "#009688" }}
            >
              <p>By German university</p>
            </Button>
          </div>
        )}

        <div className="blogbtn">
          {" "}
          <Link to={"/createblog"}>
            <button>Create New Blog</button>
          </Link>
          <Link to={""}>
            <button>View All Blogs</button>
          </Link>
        </div>
        {/* MOBILE RESPONSIVE DASHBOARD  */}
        <Filters />
        <BlogsTableMobileView />
        <BlogsTableMobileView />
        <BlogsTableMobileView />
        <BlogsTableMobileView />
        <BlogsTableMobileView />
        <BlogsTableMobileView />

        <div className="blogbody">
          <div className="table">
            <TableContainer sx={{ p: "2rem" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      Title
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      align="right"
                    >
                      Country
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      align="right"
                    >
                      Status
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
                  {blogsData.map((item,i)=>(<TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {item.title.slice(0,50)}...
                    </TableCell>
                    <TableCell align="right">German</TableCell>
                    <TableCell align="right">{item.status}</TableCell>
                    <TableCell align="right">{item.updatedDate}</TableCell>
                    <TableCell align="right">
                      <Button id="edit" onClick={handleEvents}>Edit</Button>
                      <Button id="deletebtn" onClick={()=>handleDelete(item._id)}>Delete</Button>
                    </TableCell>
                  </TableRow>))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </div>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Deletemsg  userId={userId} deleteModalOpened={deleteModalOpened} setDeleteModalOpened={setDeleteModalOpened}/>
    </>
  );
};

export default Dashboard;

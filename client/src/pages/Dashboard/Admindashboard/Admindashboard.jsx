import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
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
import Filters from '../../../components/Filters/Filters'
import BlogsTableMobileView from "../../../components/BlogsTableMobileView/BlogsTableMobileView";
import { isLoggedIn } from "../../../utility/auth";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "../../../components/ProfileModal/ProfileModal";
import Deletemsg from '../../../components/ProfileModal/Deletemsg'
import { fetchBlogs } from "../../../reduxToolkit/blogsReducer";

const Admindashboard = () => {
  const { blogsData } = useSelector((state) => state.blogs); 
  const [nextPg, setNextPg] = useState(3);
  const dispatch = useDispatch();
  
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
  
  useEffect(() => {
    dispatch(fetchBlogs());
  },[])

  if (!isLoggedIn()) {
    return <Navigate replace to="/login" />;
  }
 

  return (
    <> 
      <Navbar />
      <div className="blogdashboard">
        <div className="verified">
          <Button variant="outlined" size="small">
            Verified
          </Button>{" "}
          :{" "}
          <Button variant="contained" size="small" sx={{ bgcolor: "#009688" }}>
            <p>Admin</p>
          </Button>
        </div>

        <div className="blogbtn">
          {" "}
          <Link to={"/createblog"}>
            <button>Create New Blog</button>
          </Link>
          <Link to={"/createuser"}>
            <button>Create New User</button>
          </Link>
        </div>
        <div style={{textAlign:'center'}}><h1>Latest Blogs</h1></div>
        <Filters/>
        {/* MOBILE RESPOSIVE ADMIN DASHBOARD  */}
        <BlogsTableMobileView/>
        <BlogsTableMobileView/>
        <BlogsTableMobileView/>
        <BlogsTableMobileView/>
        <BlogsTableMobileView/>
        <div className="blogbody"> 
        {/* DESKTOP RESPONSIVE DASHBORAD  */}
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
                  </TableRow>)).slice(nextPg - 3, nextPg)}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="pagination">
          {blogsData.map(
              (item, n) =>
                n % 3 == 0 && (
                  <span key={n} onClick={() => setNextPg(n + 3)}>
                    {pg++}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Deletemsg blogDelete={true} userId={userId} deleteModalOpened={deleteModalOpened} setDeleteModalOpened={setDeleteModalOpened}/>
    </>
  );
};

export default Admindashboard;

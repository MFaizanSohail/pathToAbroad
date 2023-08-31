import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import Filters from '../../../components/Filters/Filters'
import BlogsTableMobileView from "../../../components/BlogsTableMobileView/BlogsTableMobileView";

const Admindashboard = () => {
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
          <button>
            <Link to={"/createblog"}>Create New Blog</Link>
          </button>
          <button>
            <Link to={"/createuser"}>Create New User</Link>
          </button>
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
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit.
                    </TableCell>
                    <TableCell align="right">German</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit. Lorem, ipsum.
                    </TableCell>
                    <TableCell align="right">France</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit.
                    </TableCell>
                    <TableCell align="right">America</TableCell>
                    <TableCell align="right">Private</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit.
                    </TableCell>
                    <TableCell align="right">German</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit.
                    </TableCell>
                    <TableCell align="right">England</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Lorem ipsum dolor sit Lorem, ipsum dolor.
                    </TableCell>
                    <TableCell align="right">German</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
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
    </>
  );
};

export default Admindashboard;

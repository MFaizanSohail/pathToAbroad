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
import { isLoggedIn } from "../../utility/auth";


const Dashboard = () => {
  const [verified, setVerified] = useState(true);

  if (!isLoggedIn()) {
    return <Navigate replace to="/login" />;
  }

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

export default Dashboard;

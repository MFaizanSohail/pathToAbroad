import React from 'react'
import './Createuser.scss'
import Navbar from '../Navbar/Navbar'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Createuser = () => {
  return (
    <>
     <Navbar/>
      <div className="blogdashboard">

        <div className="createuser" style={{textAlign:'center', fontSize:'1.4rem'}}>
            <h1>User</h1>
        </div>
        <div className="blogbody">
          <div className="blogfilters">
            <div className="filter">Filters</div> <label>Name</label>
            <label>Email</label>
            <label>Status</label>
          </div>
          <div className="table">
            <TableContainer sx={{p:'2rem'}} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow >
                    <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", textAlign:'center', fontSize: "18px" }}
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
                  <TableRow>
                    <TableCell component="th" scope="row">
                      umer muazzam
                    </TableCell>
                    <TableCell align="right">umermuazzam666@gmail.com</TableCell>
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">Last update</TableCell>
                    <TableCell align="right">
                      <Button id="edit">Edit</Button>
                      <Button id="deletebtn">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      faizan
                    </TableCell>
                    <TableCell align="right">faizan@gmail.com</TableCell>
                    <TableCell align="right">admin</TableCell>
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
                      Lorem ipsum dolor 
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
  )
}

export default Createuser

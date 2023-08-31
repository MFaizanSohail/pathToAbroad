import { Delete } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import React from 'react' 

const ResponsiveCreateUser = () => {
  return (
    <>
       <div className="filterContainer"> 
       <div className="search" style={{width:'90%',border:'2px solid #19a7ce',margin:"0 auto"}}> <InputBase placeholder='Search with email address' sx={{ width:'75%',borderRight:'2px solid #19a7ce'}}/> <span style={{marginLeft:'1rem'}}>Search</span></div>
        <div className="container">
          <div className="title">
            <span>umer</span>
            <span>umer@gmail.com</span>
          </div>
          <div className="country">
            <span>admin</span>
            <span>23/5/2023</span>
          </div>
        <div className="actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveCreateUser

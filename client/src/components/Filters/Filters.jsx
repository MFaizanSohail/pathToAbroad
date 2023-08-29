import { InputBase } from '@mui/material'
import React from 'react'
import Dropdown from '../../pages/Dashboard/Dropdown/Dropdown'
import './Filters.scss'

const Filters = () => {
  return (
    <>
       <div className="blogfilters">
            <div className="title">
              Filters : 
              <InputBase placeholder="search..."/>
            </div>
            <div className="filterbtn">
              <Dropdown searchFor={"Country"}/>
              <Dropdown searchFor={"Status"}/>
            </div>
          </div>
    </>
  )
}

export default Filters

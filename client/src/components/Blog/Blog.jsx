import React from 'react'
import './Blog.scss'
import { Button } from '@mui/material' 

const Blog = () => {
  return (
    <div className='blog'>
      <div className="title"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat odit est adipisci.</h1></div>
      <div className="tags"> Tags :<Button size='small' variant="outlined">Outlined</Button>  <Button size='small' variant="outlined">Outlined</Button>  
       <Button size='small' variant="outlined">Outlined</Button> </div>
      <div className="blogdetails">
        <span className='blogtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti odit explicabo dignissimos, ipsa, libero quis natus accusantium aliquam commodi rem corporis ducimus dolores laboriosam nulla velit nesciunt inventore fuga provident vitae repellat? Illo rerum deleniti iste laboriosam tempore ea magni aperiam esse velit quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod dolores placeat consequatur error possimus id adipisci assumenda ex deleniti, minus harum!.</span>
        <img src={"/img/blog-banner-34-1-696x392.png"} className='blogimg' alt="" />
      </div>
    </div>
  )
}

export default Blog

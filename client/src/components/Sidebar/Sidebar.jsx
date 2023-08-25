import React from 'react'
import './Sidebar.scss'
import Newsletter from '../Newsletter/Newsletter'
import Categories from '../Categories/Categories'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Newsletter/>
      <Categories/>
    </div>
  )
}

export default Sidebar

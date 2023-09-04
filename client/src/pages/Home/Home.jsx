import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Mainbody from '../../components/Mainbody/Mainbody'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Mainbody/>
      <Footer/>
    </div>
  )
}

export default Home

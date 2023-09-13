import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../reduxToolkit/blogsReducer';
import GeneralComponent from '../../components/Common/GeneralComponent';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import './Scholarship.scss'

const Scholarship = () => {
    const dispatch = useDispatch();
  const { blogsData, status } = useSelector((state) => state.blogs)
  console.log(blogsData, status);

  useEffect(() => {
    
    dispatch(fetchBlogs());
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <GeneralComponent data={blogsData}/>
      <Footer />
    </>
  )
}

export default Scholarship

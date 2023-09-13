import React, { useEffect } from "react";
import "./Visa.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import GeneralComponent from "../../components/Common/GeneralComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";

const Visa = () => {
  
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
  );
};

export default Visa;

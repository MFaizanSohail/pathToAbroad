import React, { useEffect } from "react";
import "./University.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero"; 
import GeneralComponent from "../../components/Common/GeneralComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";

const University = () => {
  const dispatch = useDispatch();
  const { blogsData, status } = useSelector((state) => state.blogs)
  console.log(blogsData, status);

  useEffect(() => {
    
    dispatch(fetchBlogs());
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <GeneralComponent data={blogsData}/>
      <Footer />
    </div>
  );
};

export default University;

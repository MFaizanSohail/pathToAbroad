import React from "react";
import "./University.scss";
// import "../Visa/Visa.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountryUniversity from "../../components/University/CountryUniversity";

const University = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="univeristy">
        <div className="univeristy-content">
        <CountryUniversity />
        <CountryUniversity />
        <CountryUniversity />
        <CountryUniversity />
        </div>
        <Sidebar className="sidebar" />
      </div>
      <Footer />
    </div>
  );
};

export default University;

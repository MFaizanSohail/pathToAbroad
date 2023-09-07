import React from "react";
import "./Visa.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import CountryVisa from "../../components/visa/CountryVisa";

const Visa = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <div className="visa">
        <div className="visa-content">
          <CountryVisa />
          <CountryVisa />
          <CountryVisa />
          <CountryVisa />
        </div>
        <Sidebar className="sidebar" />
      </div>
      <Footer />
    </div>
  );
};

export default Visa;

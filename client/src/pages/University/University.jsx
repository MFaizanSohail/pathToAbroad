import React from "react";
import "./University.scss";
import "../Visa/Visa.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Button } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

const Countryuni = () => {
  return (
    <>
      <div className="visa-country">Oxford University</div>
      <div className="visa-tags">
        {" "}
        Tags :
        <Button size="small" variant="outlined">
          Outlined
        </Button>{" "}
        <Button size="small" variant="outlined">
          Outlined
        </Button>
        <Button size="small" variant="outlined">
          Outlined
        </Button>
      </div>
      <div className="visa-policy">
        <div className="policy">
          <img src="/img/blog-banner-53-1-696x392.png" alt="" />
          <div className="visa-title">Lorem, ipsum dolor sit amet</div>
        </div>
        <div className="policy">
          <img
            src="/img/Form-of-funding-Fully-Funded.-The-deadline-for-applications-is-10Th-January-2023.-82-1-485x360.png"
            alt=""
          />
          <div className="visa-title">Lorem, ipsum dolor sit amet</div>
        </div>
        <div className="policy">
          <img src="/img/blog-banner-34-1-696x392.png" alt="" />
          <div className="visa-title">Lorem, ipsum dolor sit amet</div>
        </div>
      </div>
    </>
  );
};

const University = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="visa">
        <div className="visa-content">
          <Countryuni />
          <Countryuni />
          <Countryuni />
          <Countryuni />
        </div>
        <Sidebar className="sidebar" />
      </div>
      <Footer />
    </div>
  );
};

export default University;

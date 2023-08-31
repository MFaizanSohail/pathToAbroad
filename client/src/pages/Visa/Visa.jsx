import React from "react";
import "./Visa.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Button } from "@mui/material";
import Hero from "../../components/Hero/Hero";

const Countryvisa = () => {
  return (
    <>
      <div className="visa-country">Germany visa</div>
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
          <img src="/img/blog-banner-34-1-696x392.png" alt="" />
          <div className="visa-title">Lorem, ipsum dolor sit amet</div>
        </div>
        <div className="policy">
          <img src="/img/blog-banner-48-1-696x392.png" alt="" />
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

const Visa = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="visa">
        <div className="visa-content">
          <Countryvisa />
          <Countryvisa />
          <Countryvisa />
          <Countryvisa />
        </div>
      </div>
        <Sidebar className="sidebar" />
      <Footer />
    </div>
  );
};

export default Visa;

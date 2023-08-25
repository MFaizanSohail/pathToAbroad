import React from "react";
import "./Messagegreet.scss";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const Messagegreet = () => {
  return (
    <>
      <Navbar />
      <div className="greetmsg">
        <div className="content">
          <p>Thank you for contacting us !</p>
          <p>We will reach back to you with regarding to your query</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Messagegreet;

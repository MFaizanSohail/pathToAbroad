import React from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="contact">
        <div className="left-contact">
          <div className="details">
            <label htmlFor="name">
              Name
              <input type="text" placeholder="" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" placeholder="" />
            </label>
          </div>
          <div className="subject">
            <label htmlFor="subject">
              {" "}
              Subject Line
              <input type="text" placeholder="" />
            </label>
          </div>

          <div className="message">
            <label>
              {" "}
              Message
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
              ></textarea>
            </label>
          </div>
          <div className="button">
            <Link to='/messagegreet'><button className="submit">Submit</button></Link>
          </div>
        </div>
        <div className="right-contact">
          <img src="/img/contact4.png" className="profile" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

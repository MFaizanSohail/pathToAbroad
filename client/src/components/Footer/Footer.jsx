import React from "react";
import "./Footer.scss"; 
import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-f">
        <div className="aboutus">
          <div className="abouttitle">About us</div>
          <div className="aboutdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe
            aliquam quaerat esse error possimus. Quod molestias, asperiores
            laboriosam eius reiciendis recusandae amet fugit. Atque voluptatum
            aspernatur suscipit accusantium magni, perspiciatis praesentium
            possimus.
          </div>
        </div>
        <ul className="pagelinks">
          <li>Home</li>
          <li>Contact us</li>
          <li>Visa</li>
          <li>Universities</li>
          <li>Privacy policy</li>
          <li>Disclaimer</li>
          <li>Term & conditions</li>
        </ul>
      <div className="verticalline"></div>
      </div>
      <div className="right-f">
        <Newsletter/> </div>
    </div>
  );
};

export default Footer;

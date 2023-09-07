import React from "react";
import "./CountryUniversity.scss";
import { Button } from "@mui/material";

const CountryUniversity = () => {
  return (
    <div className="Country-section">
      <div className="univeristy-country"><h2>Oxford University</h2></div>
      <div className="univeristy-tags">
        {" "}
        <h3>Tags :</h3>
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
      <div className="univeristy-policy">
        <div className="policy">
          <img src="/img/blog-banner-53-1-696x392.png" alt="" />
          <div className="univeristy-title">Lorem, ipsum dolor sit amet</div>
        </div>
        <div className="policy">
          <img
            src="/img/Form-of-funding-Fully-Funded.-The-deadline-for-applications-is-10Th-January-2023.-82-1-485x360.png"
            alt=""
          />
          <div className="univeristy-title">Lorem, ipsum dolor sit amet</div>
        </div>
        <div className="policy">
          <img src="/img/blog-banner-34-1-696x392.png" alt="" />
          <div className="univeristy-title">Lorem, ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  );
};

export default CountryUniversity;

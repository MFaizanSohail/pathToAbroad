import { ArrowUpward } from "@mui/icons-material";
import React, { useState } from "react";
import "./Scroll.scss";

const Scroll = () => { 
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="scroll" onClick={() => moveToTop()}>
      <ArrowUpward />
    </div>
  );
};

export default Scroll;

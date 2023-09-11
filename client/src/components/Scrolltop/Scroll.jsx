import React, { useState, useEffect } from "react";
import "./Scroll.scss";
import { ArrowUpward } from "@mui/icons-material";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight * 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll ${isVisible ? "visible" : "hidden"}`}
      onClick={() => moveToTop()}
    >
      <ArrowUpward />
    </div>
  );
};

export default Scroll;
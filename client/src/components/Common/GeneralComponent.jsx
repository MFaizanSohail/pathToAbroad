import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack"; 

const GeneralComponent = ({ data }) => {
  const [nextPg, setNextPg] = useState(12);   

  const handlePagination=(e,p)=>{
    console.log(p);
    setNextPg(p*12)
  } 
  useEffect(() => {
    window.scrollTo(0, 500);
  }, [nextPg]);

  return (
    <>
      <div className="visa">
        <div className="visa-content">
          <div className="visa-country">
            <h2>Germany visa</h2>
          </div>
          <div className="visa-tags">
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
          <div className="visa-policy">
            {data.map((item,i)=>(<div className="policy" key={i}>
              <div className="img-container"><img src={item.imageUrl} alt="" /></div>
              <div className="visa-title">{item.title.slice(0,40)}</div>
            </div>)).slice(nextPg - 12, nextPg)} 
          </div>
        </div>
        <Sidebar className="sidebar" />
      </div>
      <Stack className="pgStack" spacing={2}>
        <Pagination className="pagination" count={Math.ceil((data.length)/12)} shape="rounded" onChange={handlePagination}/>
      </Stack>
    </>
  );
};

export default GeneralComponent;

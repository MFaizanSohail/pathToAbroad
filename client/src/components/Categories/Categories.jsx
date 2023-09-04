import React from "react";
import "./Categories.scss";
import { data } from "../StaticData/data";

const Categories = () => {
  return (
    <>
      <h3 className="cat-head">Popular Categories</h3>
      {data.map((item,i) => (
        <div key={i} className="categories">
          <div className="category">
            <div className="scholarshiptype">{item.category}</div>
            <span className="totalpost">{item.count}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;

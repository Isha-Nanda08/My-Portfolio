import React from "react";
import "../styles/gridf.css";

const MondrianGrid = () => {
  return (
    <div className="grid">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={index} className={`cell cell-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default MondrianGrid;

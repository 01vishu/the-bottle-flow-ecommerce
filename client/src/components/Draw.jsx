import React from "react";

const Draw = ({ draw }) => {
  return (
    <div className="draw_box">
      <div className="draw">
        <img src={draw.image} alt={draw.title} />
        <h3>{draw.title}</h3>
        <span>{draw.description}</span>
      </div>
    </div>
  );
};

export default Draw;

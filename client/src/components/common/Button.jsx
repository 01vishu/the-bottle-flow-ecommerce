import React from "react";

const Button = ({ title, handleOnClick, buttonStyle }) => {
  return (
    <button onClick={handleOnClick} className={buttonStyle}>
      {title}
    </button>
  );
};

export default Button;

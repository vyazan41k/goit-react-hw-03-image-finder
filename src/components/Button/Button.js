import "./Button.css";
import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="Button" type="button" onClick={() => onClick()}>
      Load more
    </button>
  );
};

export default Button;

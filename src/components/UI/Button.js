import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${"px-3 py-2 rounded-md text-white"} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

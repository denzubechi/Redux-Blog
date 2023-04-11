import React from "react";
import "./styles/index.css";

const InputComponent = ({ type, Name, placeholder }) => {
  return (
    <input
      className="textInput"
      type={type}
      name={Name}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;

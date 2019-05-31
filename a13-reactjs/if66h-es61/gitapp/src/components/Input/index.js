import React from "react";
import "./styles.css";

const Input = ({ onChange }) => {
  return (
    <input onChange={onChange} className="input" placeHolder="Digite algo..." />
  );
};

export default Input;

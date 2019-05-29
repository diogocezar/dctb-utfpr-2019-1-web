import React from "react";

import "./styles.css";

const Input = props => (
  <input
    className="input"
    placeHolder={props.message}
    onChange={props.onChange}
  />
);

export default Input;

import React from "react";
import { inputChange } from "../actions";
import { bindActionCreators } from "redux";

const Button = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Submit</button>
  </div>
);

export default Button;

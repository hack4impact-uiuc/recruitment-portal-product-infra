import { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";

import { inputChange } from "../actions";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Input extends Component {
  render() {
    return (
    //   <StyledInput>
    //     {" "}
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
    //   </StyledInput>
    );
  }
}

export default Input;

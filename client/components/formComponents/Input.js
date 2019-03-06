import { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: white;
  border: 2px solid #dddddd;
  border-radius: 5px;
`;

class Input extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <StyledInput
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;

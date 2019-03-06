import { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#0c894c" : "white")};
  color: ${props => (props.primary ? "white" : "#0c894c")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0c894c;
  border-radius: 3px;
`;

class HButton extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.name}
      </StyledButton>
    );
  }
}

export default HButton;

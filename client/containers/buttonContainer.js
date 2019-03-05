import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../components/Button";
import { inputChange } from "../actions";
import initialState from "../utils/initialState";

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      onClick: () => () => {
        const { title, name, val } = ownProps;
        dispatch(inputChange(title, name, val));
      }
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

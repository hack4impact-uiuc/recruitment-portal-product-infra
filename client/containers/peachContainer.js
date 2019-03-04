import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Peach from "./../components/Peach";
import { washPeach, eatPeach, rotPeach } from "./../actions";
import initialState from "./../utils/initialState";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      washPeach,
      eatPeach,
      rotPeach
    },
    dispatch
  );

const mapStateToProps = state => {
  console.log(state.peach);
  return {
    dirty: state.peach.dirty,
    remainingBites: state.peach.remainingBites,
    color: state.peach.color
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Peach);

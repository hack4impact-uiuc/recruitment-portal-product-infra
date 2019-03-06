import { Component } from "react";
import { washPeach, eatPeach, rotPeach } from "./../actions";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

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

class Peach extends Component {
  render() {
    return (
      <div>
        <p>Dirty: {this.props.dirty ? "true" : "false"}</p>
        <p>Remaining bites: {this.props.remainingBites}</p>
        <p>Color: {this.props.color}</p>
        <button onClick={this.props.washPeach}>Wash peach</button>
        <button onClick={this.props.eatPeach}>Eat peach</button>
        <button onClick={this.props.rotPeach}>Rot peach</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Peach);

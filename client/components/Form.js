import { Component } from "react";
import Link from "next/link";
import Header from "./header";
import { Form, Text } from "informed";
import { bindActionCreators } from "redux";
// import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { inputChange } from "../actions";
import Button from "./formComponents/Button";
import Input from "./formComponents/Input";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      inputChange
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    state
  };
};

class MyForm extends Component {
  state = {
    title: "",
    name: "",
    val: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    this.props.inputChange(this.state.title, this.state.name, this.state.val);
  };

  render() {
    return (
      <main>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <Input
            title="Title   "
            type="text"
            name={"title"}
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Input
            title="Name"
            type="text"
            name={"name"}
            value={this.state.name}
            onChange={this.handleChange}
          />

          <Input
            title="Value"
            type="text"
            name={"val"}
            value={this.state.val}
            onChange={this.handleChange}
          />
        </form>
        <Button onClick={this.handleSubmit} name="submit" />
      </main>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm);

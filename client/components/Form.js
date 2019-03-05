import { Component } from "react";
import Link from "next/link";
import Header from "./header";
import { Col, Row } from "react-bootstrap";
import ButtonContainer from "../containers/buttonContainer";

class Form extends Component {
  render() {
    return (
      <main>
        <Header />
        <ButtonContainer title="title?" name="name?" val="val?" />
      </main>
    );
  }
}

export default Form;

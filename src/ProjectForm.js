import React from "react";
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import DashForm from "./DashForm.js";
import ImageUpload from "./Uploader.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class ProjectForm extends React.Component {
  render() {
    return (
      <Container
        fluid={true}
        style={{
          backgroundColor: "#E1E1E1",
          color: "#222222"
          //height: "1000px"
        }}
      >
        <Row>
          <Col
            xs={2}
            style={{
              color: "#222222",
              marginTop: "100px",
              backgroundColor: "yellow"
            }}
          >
            Project Form
          </Col>
          <Col
            xs={8}
            style={{
              color: "#222222",
              marginTop: "100px",
              backgroundColor: "blue"
            }}
          >
            <DashForm />
            <ImageUpload />
          </Col>
          <Col
            xs={2}
            style={{
              color: "#222222",
              marginTop: "100px",
              backgroundColor: "red"
            }}
          >
            Project Form
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ProjectForm;

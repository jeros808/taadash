import React, { Component } from "react";
import { f, auth, database, storage } from "./config/config.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
class DashForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      style: null,
      budget: null,
      timeline: null,
      factory: null,
      projectDetails: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.state({ title, style });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    //event.preventDefault();
    f.database()
      .ref()
      .set({
        title: this.refs.title.value,
        style: this.refs.style.value,
        budget: this.refs.budget.value,
        timeline: this.refs.timeline.value,
        factory: this.refs.factory.value,
        projectDetails: this.refs.projectDetails.value
      });
    event.preventDefault();
    this.props.history.push("/");
  }

  componentDidMount() {
    //this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    const rootRef = f.database().ref();
    const titleRef = rootRef.child("title");
    const styleRef = rootRef.child("style");
    const budgetRef = rootRef.child("budget");
    const timelineRef = rootRef.child("timeline");
    const factoryRef = rootRef.child("factory");
    const projectDetailsRef = rootRef.child("projectDetails");
    //const budgetRef = rootRef.child("budget");
    styleRef.on("value", snap => {
      this.setState({
        style: snap.val()
      });
    });
    titleRef.on("value", snap => {
      this.setState({
        title: snap.val()
      });
    });
    budgetRef.on("value", snap => {
      this.setState({
        budget: snap.val()
      });
    });
    timelineRef.on("value", snap => {
      this.setState({
        timeline: snap.val()
      });
    });
    factoryRef.on("value", snap => {
      this.setState({
        factory: snap.val()
      });
    });
    projectDetailsRef.on("value", snap => {
      this.setState({
        projectDetails: snap.val()
      });
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Row>
            <Col sm={12}>
              <label>What is the name of your project?</label>
            </Col>
            <Col sm={12}>
              <input
                ref='title'
                type='text'
                value={this.state.title}
                name='title'
                onChange={this.onChange}
                placeholder={this.state.title}
              />
            </Col>
            <Col sm={12}>
              <a href='#'>Next</a>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>How many styles do you want to make?</label>
            </Col>
            <Col sm={12}>
              <input
                ref='style'
                type='text'
                value={this.state.style}
                name='style'
                onChange={this.onChange}
                placeholder={this.state.style}
              />
            </Col>
            <Col sm={12}>
              <a href='#'>Previous</a>
              <a href='#'>Next</a>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>What is your budget?</label>
            </Col>
            <Col sm={12}>
              <input
                ref='budget'
                type='text'
                value={this.state.budget}
                name='budget'
                onChange={this.onChange}
                placeholder={this.state.budget}
              />
            </Col>
            <Col sm={12}>
              <a href='#'>Previous</a>
              <a href='#'>Next</a>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>What is your timeline for this project?</label>
            </Col>
            <Col sm={12}>
              <input
                ref='timeline'
                type='text'
                value={this.state.timeline}
                name='timeline'
                onChange={this.onChange}
                placeholder={this.state.timeline}
              />
            </Col>
            <Col sm={12}>
              <a href='#'>Previous</a>
              <a href='#'>Next</a>
            </Col>
          </Row>
          <label>
            Factory Ready:
            <input
              ref='factory'
              type='text'
              value={this.state.factory}
              name='factory'
              onChange={this.onChange}
              placeholder={this.state.factory}
            />
          </label>
          <a href='#'>Previous</a>
          <a href='#'>Next</a>
          <Row>
            <Col sm={12}>
              <label>Tell us about your project.</label>
            </Col>
            <Col sm={12}>
              <textarea
                ref='projectDetails'
                type='text'
                value={this.state.projectDetails}
                name='projectDetails'
                onChange={this.onChange}
                placeholder={this.state.projectDetails}
              />
            </Col>
            <Col sm={12}>
              <a href='#'>Previous</a>
            </Col>
            <Col sm={12}>
              <input type='submit' value='Submit' />
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
}
//export default DashForm;
export default withRouter(DashForm);

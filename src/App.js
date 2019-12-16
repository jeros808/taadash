import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import logo from "./logo.svg";
import "./App.css";
import { f, auth, database, storage } from "./config/config.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import UploadList from "./UploadList.js";
import LoginForm from "./LoginForm.js";
import Uploader from "./Uploader.js";
//import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const trial = moment().add(30, "days");
    if (date == trial) {
      //lock user out
    }
    //register user when loaded v
    // this.registerUser("testemailaddress@gmail.com", "fakepassword");

    //     signUserOut = () => {
    //     auth
    //       .signOut()
    //       .then(() => {
    //         console.log("logged out...");
    //       })
    //       .catch(error => {
    //         console.log("Error:", error);
    //       });
    //     }
    // //login
    // this.state = {
    //   loggedin: false
    // };

    //   var that = this;
    //   // is the user logged in?
    //   // check here
    //   f.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       //logged in
    //       that.setState({
    //         loggedin: true
    //       });
    //       console.log("Logged in", user);
    //     } else {
    //       //logged out
    //       that.setState({
    //         loggedin: false
    //       });
    //       console.log("Logged out");
    //     }
    //   });

    this.state = {
      title: "",
      style: "",
      budget: "",
      timeline: "",
      factory: "",
      projectDetails: "",
      url: "",
      reference: []
    };
    // }
    // loginUser = async (email, pass) => {
    //   if (email != "" && pass != "") {
    //     //
    //     try {
    //       let user = await auth.signInWithEmailAndPassword(email, pass);
    //       console.log(user);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     //if is
    //     alert("Missing email or password");
    //   }
    // };

    // //register user authentication
    // registerUser = (email, password) => {
    //   console.log(email, password);
    //   auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(userObj => console.log(email, password, userObj))
    //     .catch(error => console.log("error logging in", error));
    // };
    // //end register user authentication
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

    //adds to snap value for edit button
    // f.database()
    //   .ref()
    //   .set({
    //     title: "Project titler",
    //     style: 4,
    //     budget: "30-40k",
    //     timeline: "3mo",
    //     factory: "38%",
    //     projectDetails:
    //       "This is an awesome shirt! I want to create this really awesome shirt, and I’m looking for something awesome within my budget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //   });
  }

  render() {
    const date = new Date();
    const trial = moment().add(30, "days");
    return (
      <div className='App'>
        <Container fluid={true}>
          <Row>
            <div
              style={{
                backgroundColor: "#ffffff",
                paddingTop: 100,
                width: 100,
                height: "100%",
                position: "fixed",
                borderRight: "1px #e3e3e3 solid"
              }}
            >
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-angle-right'
                      style={{
                        fontSize: 40,
                        fontWeight: "bold",
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-plus'
                      style={{
                        fontSize: 35,
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-th'
                      style={{
                        fontSize: 35,
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-user'
                      style={{
                        fontSize: 35,
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-phone'
                      style={{
                        fontSize: 35,
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i
                      className='fa fa-cog'
                      style={{
                        fontSize: 35,
                        color: "grey",
                        marginLeft: -36,
                        paddingBottom: 60
                      }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{
                height: 1000,
                width: "100%",
                //float: "left",
                //position: "relative"
                background: "#f5f5f5",
                marginLeft: 100
              }}
            >
              <Container>
                <Row
                  style={{
                    //inside the dashboard
                    marginTop: 150
                  }}
                >
                  <Col md={12}>
                    <h2 style={{ color: "#222222", textAlign: "left" }}>
                      {this.state.title}
                    </h2>
                  </Col>
                </Row>
                <Row
                  style={{
                    //inside the dashboard
                    marginTop: 20
                  }}
                >
                  <Col md={1}>
                    <Button href='/ProjectForm' className='circleButton'>
                      <i className='fa fa-pencil' style={{ color: "#222" }}></i>
                    </Button>
                  </Col>
                  <Col md={3}>
                    <Button variant='primary' className='buttonSch'>
                      Schedule a call
                    </Button>
                  </Col>
                  <Col md={3}>
                    <Button variant='primary' className='buttonQuo'>
                      Get a Quote
                    </Button>
                  </Col>
                  <Col md={5}></Col>
                </Row>
                <Row
                  style={{
                    //inside the dashboard
                    marginTop: 50
                  }}
                >
                  <Col md={3}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 120,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>Style Quantity</h6>
                      <h2>{this.state.style}</h2>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 120,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>cost</h6>
                      <h2>{this.state.budget}</h2>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 120,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>Timeline</h6>
                      <h2>{this.state.timeline}</h2>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 120,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>Factory Ready</h6>
                      <h2>{this.state.factory}</h2>
                    </div>
                  </Col>
                </Row>
                <Row
                  style={{
                    //inside the dashboard
                    marginTop: 50
                  }}
                >
                  <Col md={6}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 300,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>Project Details</h6>
                      <p style={{ textAlign: "left" }}>
                        {this.state.projectDetails}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        height: 300,
                        width: "100%",
                        borderRadius: 5
                      }}
                    >
                      <h6>Reference Files</h6>

                      <UploadList />
                      <Moment>{date}</Moment>
                      {/* // <div>{trial}</div> */}
                      <Moment>{trial}</Moment>

                      <form>
                        <label>
                          Name:
                          <input type='text' name='name' />
                        </label>
                        <label>
                          Password:
                          <input type='text' name='password' />
                        </label>
                        <input type='submit' value='Submit' />
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

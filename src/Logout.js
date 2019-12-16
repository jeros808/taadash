import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    //register user when loaded v
    // this.registerUser("testemailaddress@gmail.com", "fakepassword");

    //sign User out
    signUserOut = () => {
      auth
        .signOut()
        .then(() => {
          console.log("logged out...");
        })
        .catch(error => {
          console.log("Error:", error);
        });
    };
  }
}

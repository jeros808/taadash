import React, { Component } from "react";
import { f, auth, database, storage } from "./config/config.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    const rootRef = f.database().ref("/user");
    const usernameRef = rootRef.child("username");
    const passwordRef = rootRef.child("password");

    //const budgetRef = rootRef.child("budget");
    usernameRef.on("value", snap => {
      this.setState({
        username: snap.val()
      });
    });
    passwordRef.on("value", snap => {
      this.setState({
        password: snap.val()
      });
    });
  }

  handleChange(event) {
    this.setState({
      password: event.target.value,
      title: event.target.value
    });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    //event.preventDefault();
    f.database()
      .ref()
      .set({
        username: this.refs.username.value,
        password: this.refs.password.value
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          username:
          <input
            ref='username'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          password:
          <input
            ref='password'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>

        <input type='submit' value='Submit' />
      </form>
    );
  }
}
export default LoginForm;

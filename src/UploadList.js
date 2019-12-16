import { f, auth, database, storage, storageRef } from "./config/config.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
//import storage from "../Firebase/index";
//

class UploadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //orderId: [],
      url: []
    };
  }

  componentDidMount() {
    // this.state = {
    //   //orderId: [],
    //   url: []
    // };
    const ordersRef = f
      .database()
      .ref()
      .child("downloadUrl")
      .orderByKey();

    ordersRef.once("value", snapshot => {
      snapshot.forEach(child => {
        this.setState({
          url: this.state.url.concat([child.val().url])
        });
      });

      const ordersList = this.state.url.map((dataList, index) => (
        // <p>
        //   {/* {dataList} */}
        //   <br />

        <Col
          sm={3}
          style={{
            height: "50px",
            width: "50px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <a href={this.state.url[index]}>
            <img
              src={this.state.url[index]}
              height='100%'
              width='100%'
              style={{
                objectFit: "scale-down",
                padding: "10px",
                border: "1px solid grey"
              }}
            />
          </a>
        </Col>
      ));

      this.setState({
        ordersRef: ordersList
      });
    });

    //end test
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  //test

  render() {
    const messageRef = f.database().ref("downloadUrl");
    console.log(messageRef);
    return (
      <div className='center'>
        <ul>
          <Row>{this.state.ordersRef}</Row>
        </ul>
      </div>
    );
    // var imagesRef = storageRef.child("images");
    // console.log("hello");
  }
}

export default UploadList;

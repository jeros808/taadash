// import React, { Component } from "react";
import { f, auth, database, storage, storageRef } from "./config/config.js";
// import PropTypes from "prop-types";
// import { map } from "lodash";
// import { useSelector } from "react-redux";
// import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
// import Dropzone from "react-dropzone";

import React, { Component } from "react";
//import storage from "../Firebase/index";
//

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //orderId: [],
      url: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  //   //handleuploadteststart

  //handleuploadend

  handleUpload = async imageUrl => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // var photoObj = {
    //   url: imageUrl
    // };
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        storage
          .ref("/images/")
          .child(image.name)
          .getDownloadURL()

          .then(url => {
            this.setState({ url });
            const messageRef = f.database().ref("downloadUrl");
            messageRef.push({
              url: url
            });
            //console.log(imageUrl);
          });
      }
    );
  };
  //test

  componentDidMount() {
    this.state = {
      //orderId: [],
      url: []
    };
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
        <p>
          {/* {dataList} */}
          <br />
          <img src={this.state.url[index]} />
          <br />
          <br />
          <b>uploads: </b>
          {/* {this.state.url[index].map((f, index) => (
            <p key={index}>
              {index + 1}-Furl:{f.url} , Food ID: {f.url} , Food price:{f.url}
            </p>
          ))} */}
          <br />
        </p>
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
        <br />
        <h2 className='green-text'>React Firebase Image Uploader</h2>
        <br />
        <br />
        <div className='row'>
          <progress
            value={this.state.progress}
            max='100'
            className='progress'
          />
        </div>
        <br />
        <br />
        <br />
        <div className='file-field input-field'>
          <div className='btn'>
            <span>File</span>
            <input type='file' onChange={this.handleChange} />
          </div>
          <div className='file-path-wrapper'>
            <input className='file-path validate' type='text' />
          </div>
        </div>
        <button
          value={this.state.url}
          name='upload'
          onClick={this.handleUpload}
          onChange={this.onChange}
          className='waves-effect waves-light btn'
        >
          Upload
        </button>
        <br />
        <br />
        {
          <img
            src={this.state.url || "https://via.placeholder.com/400x300"}
            alt='Uploaded Images'
            height='300'
            width='400'
          />
        }
        <p>hi</p>
        <div className='App'>
          <p className='App-intro'>
            <ul>
              <ul>{this.state.ordersRef}</ul>
            </ul>
          </p>
        </div>
        <br></br>
        hey
      </div>
    );
    // var imagesRef = storageRef.child("images");
    // console.log("hello");
  }
}

export default ImageUpload;

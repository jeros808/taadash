import * as firebase from "firebase";
import firestore from "firebase/firestore";
const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings(settings);
// Create a root reference
export const storageRef = firebase.storage().ref();

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

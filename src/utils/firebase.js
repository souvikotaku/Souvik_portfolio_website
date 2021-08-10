import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWWUrIuLEZHanUxKn5AFqtNFKwbheweWs",
  authDomain: "portfolio-form-516e2.firebaseapp.com",
  databaseURL:
    "https://portfolio-form-516e2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-form-516e2",
  storageBucket: "portfolio-form-516e2.appspot.com",
  messagingSenderId: "767474935715",
  appId: "1:767474935715:web:546b0d9954a2822cfcdc16",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtkkGHPy_QZAVwaNj-fAEWNBXsRvEUxu8",
  authDomain: "tinder-reactclone.firebaseapp.com",
  databaseURL: "https://tinder-reactclone.firebaseio.com",
  projectId: "tinder-reactclone",
  storageBucket: "tinder-reactclone.appspot.com",
  messagingSenderId: "510375460369",
  appId: "1:510375460369:web:f02437dd904d3108aebbb0",
  measurementId: "G-NCFFG5DSSJ",
});

const database = firebase.firestore();
export default database;

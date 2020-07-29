import React from "react";
import "./App.css";
import Header from "./Header";

const firebaseConfig = {
  apiKey: "AIzaSyCtkkGHPy_QZAVwaNj-fAEWNBXsRvEUxu8",
  authDomain: "tinder-reactclone.firebaseapp.com",
  databaseURL: "https://tinder-reactclone.firebaseio.com",
  projectId: "tinder-reactclone",
  storageBucket: "tinder-reactclone.appspot.com",
  messagingSenderId: "510375460369",
  appId: "1:510375460369:web:f02437dd904d3108aebbb0",
  measurementId: "G-NCFFG5DSSJ",
};

function App() {
  return (
    <div className="App">
      <h1>Tinder-clone</h1>

      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      {/* Footer */}

      {/* Chat Screen */}
      {/* Individual Chat Screen */}
    </div>
  );
}

export default App;

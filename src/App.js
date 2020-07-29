import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";

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
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat Page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        {/* Tinder Cards */}
        {/* Footer */}

        {/* Chat Screen */}
        {/* Individual Chat Screen */}
      </Router>
    </div>
  );
}

export default App;

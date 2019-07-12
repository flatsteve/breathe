import React from "react";

import Breathe from "./Breathe";

import "normalize.css";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Breathe />

      <div className="App__description">
        <div className="App__description__text">
          <h1>Remember to breathe...</h1>

          <p>
            A little app to help with mindful breathing. Before you write that
            scathing code review comment, give it a go ✌️.
          </p>

          <p>
            Made with beer by <a href="https://flatsteve.com/">FlatSteve</a> 🧘
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import Breathe from "./Breathe";

import "normalize.css";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Breathe />

      <h1>Breathe</h1>

      <p>
        A little app to help with mindful breathing. Before you write that
        scathing code review comment, give it a go.
      </p>
    </div>
  );
}

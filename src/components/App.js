import React, { useState } from "react";

import TimeToggle from "./TimeToggle";
import Breathe from "./Breathe";

import "normalize.css";

import "./App.scss";

export default function App() {
  const [checked, updateChecked] = useState(false);

  return (
    <div className="App">
      <TimeToggle checked={checked} updateChecked={updateChecked} />

      <Breathe checked={checked} />

      <div className="App__description">
        <div className="App__description__text">
          <h1>Remember to breathe...</h1>

          <p>
            A little app to help with mindful breathing. Before you write that
            scathing code review comment, give it a go{" "}
            <span role="img" aria-label="peace">
              ✌️
            </span>
            .
          </p>

          <p>
            Made with{" "}
            <span role="img" aria-label="beer">
              🍺
            </span>{" "}
            by <a href="https://flatsteve.com/">FlatSteve</a>{" "}
            <span role="img" aria-label="yoga">
              🧘
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

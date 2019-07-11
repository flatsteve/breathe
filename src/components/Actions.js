import React from "react";

import { ReactComponent as PauseIcon } from "../icons/pause.svg";
import { ReactComponent as PlayIcon } from "../icons/play.svg";

import "./Actions.scss";

export default function Actions({ animating, startAnimation, pauseAnimation }) {
  return (
    <div className="Actions">
      {!animating ? (
        <button onClick={startAnimation}>
          <PlayIcon />
        </button>
      ) : (
        <button onClick={pauseAnimation}>
          <PauseIcon />
        </button>
      )}
    </div>
  );
}

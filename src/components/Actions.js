import React from "react";

import Slider from "./Slider";

import { ReactComponent as PauseIcon } from "../icons/pause.svg";
import { ReactComponent as PlayIcon } from "../icons/play.svg";

import "./Actions.scss";

export default function Actions({
  animating,
  duration,
  startAnimation,
  pauseAnimation,
  updateAnimationDuration
}) {
  return (
    <div className="Actions">
      <Slider
        duration={duration}
        updateAnimationDuration={updateAnimationDuration}
      />

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

import React from "react";

import Slider from "./Slider";

import { ReactComponent as PauseIcon } from "../icons/pause.svg";
import { ReactComponent as PlayIcon } from "../icons/play.svg";
import { ReactComponent as SoundOnIcon } from "../icons/sound-on.svg";
import { ReactComponent as SoundOffIcon } from "../icons/sound-off.svg";

import "./Actions.scss";

export default function Actions({
  animating,
  duration,
  sound,
  startAnimation,
  pauseAnimation,
  toggleSound,
  updateAnimationDuration
}) {
  return (
    <div className="Actions">
      <div className="Actions__buttons">
        {!animating ? (
          <button className="Actions__button" onClick={startAnimation}>
            <PlayIcon />
          </button>
        ) : (
          <button className="Actions__button" onClick={pauseAnimation}>
            <PauseIcon />
          </button>
        )}

        <button
          className="Actions__button Actions__button--large"
          onClick={toggleSound}
        >
          {sound ? <SoundOffIcon /> : <SoundOnIcon />}
        </button>
      </div>

      <Slider
        duration={duration}
        updateAnimationDuration={updateAnimationDuration}
      />
    </div>
  );
}

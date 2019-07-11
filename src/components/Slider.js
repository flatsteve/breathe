import React from "react";

import "./Slider.scss";

export default function Slider({ duration, updateAnimationDuration }) {
  const durationInSec = duration / 1000;

  return (
    <div className="Slider">
      <input
        className="Slider__input"
        type="range"
        onChange={updateAnimationDuration}
        min="2"
        max="10"
        value={durationInSec}
        step="1"
      />

      <p className="Slider__duration">{durationInSec} seconds</p>
    </div>
  );
}

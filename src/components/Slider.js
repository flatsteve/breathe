import React from "react";

import "./Slider.scss";

export default function Slider({ duration, updateAnimationDuration }) {
  const durationInSec = duration / 1000;

  return (
    <div className="Slider">
      <input
        className="Slider__input"
        type="range"
        min="3"
        max="10"
        step="1"
        value={durationInSec}
        onChange={updateAnimationDuration}
      />

      <p className="Slider__duration">{durationInSec}s breath</p>
    </div>
  );
}

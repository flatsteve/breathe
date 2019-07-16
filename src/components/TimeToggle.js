import React from "react";

import "./TimeToggle.scss";

export default function TimeToggle({ checked, updateChecked }) {
  return (
    <div className="TimeToggle-container">
      <label className={`TimeToggle ${checked ? "TimeToggle--checked" : ""}`}>
        <input
          type="checkbox"
          value={checked}
          onChange={() => updateChecked(!checked)}
        />

        <div className="TimeToggle__slider" />
        <small className="TimeToggle__text">Night</small>
        <small className="TimeToggle__text">Day</small>
      </label>
    </div>
  );
}

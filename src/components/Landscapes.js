import React from "react";

import { ReactComponent as ForegroundShape } from "../icons/foreground.svg";
import { ReactComponent as BackgroundShape } from "../icons/background.svg";

import "./Landscapes.scss";

export const Foreground = React.forwardRef((props, ref) => {
  return (
    <div className="Foreground" ref={ref}>
      <ForegroundShape />
    </div>
  );
});

export const Background = React.forwardRef((props, ref) => {
  return (
    <div className="Background" ref={ref}>
      <BackgroundShape />
    </div>
  );
});

import React from "react";

import { ReactComponent as FeatherIcon } from "../icons/feather.svg";

import "./Feather.scss";

const Landscape = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Feather">
      <FeatherIcon />
    </div>
  );
});

export default Landscape;

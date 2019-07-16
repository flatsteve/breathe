import React from "react";

import { SOUNDCLOUD_URL, PLAYER_PARAMS } from "../utils/constants";
import { objToQueryString } from "../utils/utils";

const Player = React.forwardRef((props, ref) => {
  return (
    <iframe
      ref={ref}
      src={`${SOUNDCLOUD_URL}/554818086&${objToQueryString(PLAYER_PARAMS)}`}
      title="Soundcloud"
      width="100%"
      height="115"
      scrolling="no"
      frameBorder="no"
    />
  );
});

export default Player;

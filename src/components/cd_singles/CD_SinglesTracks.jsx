import React from "react";
import "./cd_Singles.css";
import cd_SinglesTracks from "../../data/CD_SinglesTracksJSON.json";

const CD_SinglesTracks = (props) => {
  const filteredTracks = cd_SinglesTracks.filter((track) => {
    return track.ID === props.ID;
  });

  return filteredTracks.map((track) => {
    return (
      <p className="singlesTrack" title={track["Track Name"]}>
        {track["Track Name"]}
      </p>
    );
  });
};

export default CD_SinglesTracks;

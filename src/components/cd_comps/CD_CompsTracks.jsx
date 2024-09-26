import React from "react";
import "./cd_comps.css";
import CD_CompsTracksData from "../../data/CD_CompsTracksJSON.json";

const CD_CompsTracks = (props) => {
  const filteredTracks = CD_CompsTracksData.filter((track) => {
    return track["Title ID"] === props.titleID;
  });
  let trackNum = 0;
  return filteredTracks.map((track) => {
    trackNum++;
    return (
      <p className="compTrack" key={track["Track ID"]}>
        {trackNum}
        {". "}
        {track.Artist}
        {" - "}
        {track["Track Name"]}
      </p>
    );
  });
};

export default CD_CompsTracks;

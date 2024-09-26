import React from "react";
import "./cd_comps.css";
import CD_CompsTracks from "./CD_CompsTracks";
import CD_CompsData from "../../data/CD_CompsJSON.json";

const CD_Comps = (props) => {
  return CD_CompsData.map((comp) => {
    return (
      <div className="cdCompsCardWrapper" key={comp["Title ID"]}>
        <fieldset className="compsCompWrapper">
          <legend title={comp.Title}>
            {comp.Title.length > 25
              ? comp.Title.slice(0, 26) + "..."
              : comp.Title}
          </legend>
          <div className="fieldsetSubHead">
            <p>{comp["Box ID"]}</p>
            <p>{comp.Year}</p>
          </div>
          <div className="compTracksWrapper">
            <CD_CompsTracks titleID={comp["Title ID"]} />
          </div>
        </fieldset>
      </div>
    );
  });
};

export default CD_Comps;

import React from "react";
import "./cd_Singles.css";
import cd_Singles from "../../data/CD_SinglesJSON.json";
import CD_SinglesTracks from "./CD_SinglesTracks";

const CD_Singles = (props) => {
  return cd_Singles.map((single) => {
    return (
      <div className="cdSinglesCardWrapper">
        <fieldset className="singlesItemWrapper">
          <legend>
            {single.Artist} -{" "}
            {single.Title.length > 25
              ? single.Title.slice(0, 26) + "..."
              : single.Title}
          </legend>
          <div className="fieldsetSubHead">
            <p>{single["Case Type"]}</p>
            <p>{single.Year}</p>
          </div>
          <CD_SinglesTracks ID={single.ID} />
        </fieldset>
      </div>
    );
  });
};

export default CD_Singles;

import React from "react";
import "./main.css";
import tapes from "../../data/tapesJSON.json";
import records from "../../data/recordsJSON.json";
import cds from "../../data/mainCatalogJSON.json";
import CD_Singles from "../cd_singles/CD_Singles";
import CD_Comps from "../cd_comps/CD_Comps";

const Main = (props) => {
  return (
    <>
      <div className="size-warning">
        This app is not configured yet for small screen sizes. Please view on a
        screen larger than 1300px.
      </div>
      <div id="main">
        <p id="mainTitle">
          {props.selectedFormat === "compactDiscs" && props.cdOption === null
            ? "Compact Discs"
            : undefined}
          {props.cdOption === "mainCatalog" && "The Main CD Catalog"}
          {props.cdOption === "singles" && "The CD Singles"}
          {props.cdOption === "compilations" && "The Compilation CDs"}
          {props.cdOption === "earlyPressings" && "The Early Pressings"}

          {props.selectedFormat === "records" && props.recordType}
          {props.selectedFormat === "records" &&
          props.recordType !== "Cylinder " &&
          props.recordType !== null
            ? " rpm Records"
            : undefined}
          {props.selectedFormat === "records" &&
          props.recordType === "Cylinder "
            ? "Records"
            : undefined}
          {props.recordType === null && props.selectedFormat === "records"
            ? "Records"
            : undefined}

          {props.selectedFormat === "tapes" && props.tapeType}
          {props.selectedFormat === "tapes" && "Tapes"}

          {props.selectedFormat === "visualMedia" &&
          props.visualMediaType === null
            ? "Visual Media"
            : undefined}
          {props.visualMediaType === "betaVhs" && "Beta / VHS Tapes"}
          {props.visualMediaType === "blurayDvd" && "DVD / Blu-ray Discs"}
          {props.visualMediaType === "ced" && "RCA Selectavision (CED)"}
        </p>

        {props.cdOption === "mainCatalog" &&
        props.selectedFormat === "compactDiscs" ? (
          <div className="dataWrapper">
            {cds &&
              cds
                .filter((cd) => {
                  return !cd["Box ID"].includes("Older");
                })
                .map((cd) => {
                  return (
                    <div className="row" key={cd.ID}>
                      <p className="artist">{cd.Artist}</p>
                      <p className="title">{cd.Title}</p>
                      <p className="location">{cd["Box ID"]}</p>
                    </div>
                  );
                })}
          </div>
        ) : undefined}

        {props.cdOption === "earlyPressings" && (
          <div className="dataWrapper">
            {cds &&
              cds
                .filter((cd) => {
                  return cd["Box ID"].includes("Older");
                })
                .map((cd) => {
                  return (
                    <div className="row" key={cd.ID}>
                      <p className="artist">{cd.Artist}</p>
                      <p className="title">{cd.Title}</p>
                      <p className="location">{cd["Box ID"]}</p>
                    </div>
                  );
                })}
          </div>
        )}

        {props.tapeType === null && props.selectedFormat === "tapes" ? (
          <div className="dataWrapper">
            {tapes &&
              tapes.map((tape) => {
                return (
                  <div className="row" key={tape.ID}>
                    <p className="artist">{tape.Artist}</p>
                    <p className="title">{tape.Title}</p>
                    <p className="location">{tape.Location}</p>
                  </div>
                );
              })}
          </div>
        ) : undefined}

        {props.selectedFormat === "tapes" && (
          <div className="dataWrapper">
            {tapes &&
              tapes
                .filter((tape) => {
                  return tape.Location.includes(props.tapeType);
                })
                .map((tape) => {
                  return (
                    <div className="row" key={tape.ID}>
                      <p className="artist">{tape.Artist}</p>
                      <p className="title">{tape.Title}</p>
                      <p className="location">{tape.Location}</p>
                    </div>
                  );
                })}
          </div>
        )}

        {props.recordType === null && props.selectedFormat === "records" ? (
          <div className="dataWrapper">
            {records &&
              records.map((record) => {
                return (
                  <div className="row" key={record.ID}>
                    <p className="artist">{record.Artist}</p>
                    <p className="title">{record.Title}</p>
                    <p className="location">{record.Rec_Box_ID}</p>
                  </div>
                );
              })}
          </div>
        ) : undefined}

        {props.selectedFormat === "records" && (
          <div className="dataWrapper">
            {records &&
              records
                .filter((record) => {
                  return record.Rec_Box_ID.includes(props.recordType);
                })
                .map((record) => {
                  return (
                    <div className="row" key={record.ID}>
                      <p className="artist">{record.Artist}</p>
                      <p className="title">{record.Title}</p>
                      <p className="location">{record.Rec_Box_ID}</p>
                    </div>
                  );
                })}
          </div>
        )}

        {props.selectedFormat === "compactDiscs" && (
          <div className="dataWrapper">
            {cds &&
              cds
                .filter((cd) => {
                  return cd["Box ID"].includes(props.cdOption);
                })
                .map((cd) => {
                  return (
                    <div className="row" key={cd.ID}>
                      <p className="artist">{cd.Artist}</p>
                      <p className="title">{cd.Title}</p>
                      <p className="location">{cd["Box ID"]}</p>
                    </div>
                  );
                })}
          </div>
        )}

        {props.cdOption === "singles" && <CD_Singles />}
        {props.cdOption === "compilations" && <CD_Comps />}

        <p id="ifNull">
          {props.selectedFormat === null ? "Choose A Format" : null}
        </p>
      </div>
    </>
  );
};

export default Main;

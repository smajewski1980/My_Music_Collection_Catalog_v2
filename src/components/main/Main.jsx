import React, { useEffect, useState } from "react";
import "./main.css";
import tapes from "../../data/tapesJSON.json";
import records from "../../data/recordsJSON.json";
import cds from "../../data/mainCatalogJSON.json";
import CD_Singles from "../cd_singles/CD_Singles";
import CD_Comps from "../cd_comps/CD_Comps";

const Main = (props) => {
  const { searchTerm } = props;
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    if (
      props.cdOption === "mainCatalog" &&
      props.selectedFormat === "compactDiscs"
    ) {
      setFilteredResults(
        cds.filter((cd) => {
          return cd[props.filterField]
            .toString()
            .replace(/^[^a-zA-Z]+/, "")
            .toLowerCase()
            .startsWith(searchTerm.toLowerCase());
        }),
      );
    } else if (props.selectedFormat === "records") {
      setFilteredResults(
        records
          .filter((rec) => {
            if (!props.recordType) {
              return rec;
            }
            return rec.Rec_Box_ID.includes(props.recordType);
          })
          .filter((rec) => {
            if (props.filterField === "Box ID") {
              return rec.Rec_Box_ID.toString()
                .toLowerCase()
                .startsWith(searchTerm.toLowerCase());
            }
            return rec[props.filterField]
              .toString()
              .replace(/^[^a-zA-Z]+/, "")
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          }),
      );
    }
  }, [searchTerm]);

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
        props.selectedFormat === "compactDiscs" &&
        searchTerm !== ""
          ? filteredResults.map((cd) => {
              return (
                <div
                  className="row"
                  key={cd.ID}
                >
                  <p
                    title={cd.Artist}
                    className="artist"
                  >
                    {cd.Artist}
                  </p>
                  <p
                    title={cd.Title}
                    className="title"
                  >
                    {cd.Title}
                  </p>
                  <p
                    title={cd["Box ID"]}
                    className="location"
                  >
                    {cd["Box ID"]}
                  </p>
                </div>
              );
            })
          : undefined}

        {props.selectedFormat === "records" && searchTerm !== ""
          ? filteredResults.map((rec) => {
              return (
                <div
                  className="row"
                  key={rec.ID}
                >
                  <p
                    title={rec.Artist}
                    className="artist"
                  >
                    {rec.Artist}
                  </p>
                  <p
                    title={rec.Title}
                    className="title"
                  >
                    {rec.Title}
                  </p>
                  <p
                    title={rec.Rec_Box_ID}
                    className="location"
                  >
                    {rec.Rec_Box_ID}
                  </p>
                </div>
              );
            })
          : undefined}

        {props.cdOption === "mainCatalog" &&
        props.selectedFormat === "compactDiscs" &&
        searchTerm === "" ? (
          <div className="dataWrapper">
            {cds &&
              cds
                .filter((cd) => {
                  return !cd["Box ID"].includes("Older");
                })
                .map((cd) => {
                  return (
                    <div
                      className="row"
                      key={cd.ID}
                    >
                      <p
                        title={cd.Artist}
                        className="artist"
                      >
                        {cd.Artist}
                      </p>
                      <p
                        title={cd.Title}
                        className="title"
                      >
                        {cd.Title}
                      </p>
                      <p
                        title={cd["Box ID"]}
                        className="location"
                      >
                        {cd["Box ID"]}
                      </p>
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
                    <div
                      className="row"
                      key={cd.ID}
                    >
                      <p
                        title={cd.Artist}
                        className="artist"
                      >
                        {cd.Artist}
                      </p>
                      <p
                        title={cd.Title}
                        className="title"
                      >
                        {cd.Title}
                      </p>
                      <p
                        title={cd["Box ID"]}
                        className="location"
                      >
                        {cd["Box ID"]}
                      </p>
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
                  <div
                    className="row"
                    key={tape.ID}
                  >
                    <p
                      title={tape.Artist}
                      className="artist"
                    >
                      {tape.Artist}
                    </p>
                    <p
                      title={tape.Title}
                      className="title"
                    >
                      {tape.Title}
                    </p>
                    <p
                      title={tape.Location}
                      className="location"
                    >
                      {tape.Location}
                    </p>
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
                    <div
                      className="row"
                      key={tape.ID}
                    >
                      <p
                        title={tape.Artist}
                        className="artist"
                      >
                        {tape.Artist}
                      </p>
                      <p
                        title={tape.Title}
                        className="title"
                      >
                        {tape.Title}
                      </p>
                      <p
                        title={tape.Location}
                        className="location"
                      >
                        {tape.Location}
                      </p>
                    </div>
                  );
                })}
          </div>
        )}

        {props.recordType === null &&
        props.selectedFormat === "records" &&
        searchTerm === "" ? (
          <div className="dataWrapper">
            {records &&
              records.map((record) => {
                return (
                  <div
                    className="row"
                    key={record.ID}
                  >
                    <p
                      title={record.Artist}
                      className="artist"
                    >
                      {record.Artist}
                    </p>
                    <p
                      title={record.Title}
                      className="title"
                    >
                      {record.Title}
                    </p>
                    <p
                      title={record.Rec_Box_ID}
                      className="location"
                    >
                      {record.Rec_Box_ID}
                    </p>
                  </div>
                );
              })}
          </div>
        ) : undefined}

        {props.selectedFormat === "records" && searchTerm === "" && (
          <div className="dataWrapper">
            {props.recordType === "Cylinder " && (
              <div
                className="row"
                style={{ marginBlockStart: "2rem" }}
              >
                <p style={{ marginInline: "auto", paddingBlock: ".5rem" }}>
                  It's not that I don't have any, they just aren't cataloged
                  yet.
                </p>
              </div>
            )}
            {records &&
              records
                .filter((record) => {
                  return record.Rec_Box_ID.includes(props.recordType);
                })
                .map((record) => {
                  return (
                    <div
                      className="row"
                      key={record.ID}
                    >
                      <p
                        title={record.Artist}
                        className="artist"
                      >
                        {record.Artist}
                      </p>
                      <p
                        title={record.Title}
                        className="title"
                      >
                        {record.Title}
                      </p>
                      <p
                        title={record.Rec_Box_ID}
                        className="location"
                      >
                        {record.Rec_Box_ID}
                      </p>
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
                    <div
                      className="row"
                      key={cd.ID}
                    >
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

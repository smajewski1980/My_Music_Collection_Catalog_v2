import React from "react";
import "./sidebar.css";
import records from "../../data/recordsJSON.json";
import tapes from "../../data/tapesJSON.json";
import CD_mainCat from "../../data/mainCatalogJSON.json";
import CD_Singles from "../../data/CD_SinglesJSON.json";
import CD_Comps from "../../data/CD_CompsJSON.json";

const Sidebar = (props) => {
  let cdTotals = CD_mainCat.length + CD_Singles.length + CD_Comps.length;

  return (
    <div className="sidebar">
      <h1>
        My Music
        <br />
        Collection
        <br />
        Catalog
      </h1>

      {/* <div
        className={
          props.viewingMode
            ? "modeSelect viewingActive"
            : "modeSelect entryActive"
        }
      >
        <h2>
          {props.viewingMode ? "Viewing" : "Entry"}
          <br />
          Mode Selected
        </h2>
        <div className="modeSelectButtonWrapper">
          <button
            className="viewing"
            onClick={!props.viewingMode ? props.modeClick : undefined}
          >
            Viewing
          </button>
          <button
            className="entry"
            onClick={props.viewingMode ? props.modeClick : undefined}
          >
            Entry
          </button>
        </div>
      </div> */}

      <div className="formatSelectionWrapper">
        <h2>Select Format</h2>
        <button
          className={
            props.selectedFormat === "compactDiscs"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id="compactDiscs"
          onClick={() => {
            props.formatClick("compactDiscs");
          }}
        >
          Compact Discs
        </button>
        <button
          className={
            props.selectedFormat === "records"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id="records"
          onClick={() => {
            props.formatClick("records");
          }}
        >
          Records
        </button>
        <button
          className={
            props.selectedFormat === "tapes"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id="tapes"
          onClick={() => {
            props.formatClick("tapes");
          }}
        >
          Tapes
        </button>
        <button
          className={
            props.selectedFormat === "visualMedia"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id="visualMedia"
          onClick={() => {
            props.formatClick("visualMedia");
          }}
        >
          Visual Media
        </button>
      </div>

      <div className="totalsWrapper">
        <h3>Collection Totals:</h3>
        <p className="lastUpdate">Last update: 11-10-25</p>
        <div className="totals">
          <p>CDs: {cdTotals.toLocaleString()}</p>
          <p>Records: {records.length.toLocaleString()}</p>
          <p>Tapes: {tapes.length.toLocaleString()}</p>
          <p>Visual Media: xx</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

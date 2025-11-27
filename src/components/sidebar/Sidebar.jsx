import React from "react";
import "./sidebar.css";
import records from "../../data/recordsJSON.json";
import tapes from "../../data/tapesJSON.json";
import CD_mainCat from "../../data/mainCatalogJSON.json";
import CD_Singles from "../../data/CD_SinglesJSON.json";
import CD_Comps from "../../data/CD_CompsJSON.json";

const Sidebar = (props) => {
  let cdTotals = CD_mainCat.length + CD_Singles.length + CD_Comps.length;

  function handlePrevPage() {
    if (props.currPage > 1) {
      document.documentElement.style.setProperty(
        "--anim-name-old",
        "prev-page-out",
      );
      document.documentElement.style.setProperty(
        "--anim-name-new",
        "prev-page-in",
      );
      document.documentElement.style.setProperty("--color", "aqua");
      document.startViewTransition(() => {
        props.setCurrPage((prev) => prev - 1);
      });
    }
  }

  function handleNextPage() {
    if (props.currPage < props.totalPages) {
      document.documentElement.style.setProperty(
        "--anim-name-old",
        "next-page-out",
      );
      document.documentElement.style.setProperty(
        "--anim-name-new",
        "next-page-in",
      );
      document.documentElement.style.setProperty("--color", "aqua");
      document.startViewTransition(() => {
        props.setCurrPage((prev) => prev + 1);
      });
    }
  }
  return (
    <div className='sidebar'>
      <h1>
        My Music
        <br />
        Collection
        <br />
        Catalog
      </h1>
      <div className='totalsWrapper'>
        <h3>Collection Totals:</h3>
        <p className='lastUpdate'>Last update: 11-10-25</p>
        <div className='totals'>
          <p>Records: {records.length.toLocaleString()}</p>
          <p>CDs: {cdTotals.toLocaleString()}</p>
          <p>Tapes: {tapes.length.toLocaleString()}</p>
          <p>Visual Media: xx</p>
        </div>
      </div>

      <div className='formatSelectionWrapper'>
        <h2>Select Format</h2>

        <button
          className={
            props.selectedFormat === "records"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id='records'
          onClick={() => {
            props.formatClick("records");
          }}
        >
          Records
        </button>
        <button
          className={
            props.selectedFormat === "compactDiscs"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id='compactDiscs'
          onClick={() => {
            props.formatClick("compactDiscs");
          }}
        >
          Compact Discs
        </button>
        <button
          className={
            props.selectedFormat === "tapes"
              ? "formatSelectBtn fmtBtnActive"
              : "formatSelectBtn"
          }
          id='tapes'
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
          id='visualMedia'
          onClick={() => {
            props.formatClick("visualMedia");
          }}
        >
          Visual Media
        </button>
      </div>

      {props.totalPages > 1 && (
        <div className='pg-ctrls'>
          <p>
            Current page: {props.currPage}/{props.totalPages}
          </p>
          <p className='perPage'>{props.offset} results per page</p>
          <div className='paginationControls'>
            <div
              className='prev'
              onClick={handlePrevPage}
            >
              <span>&laquo;</span>
              &nbsp;prev
            </div>
            <div
              className='next'
              onClick={handleNextPage}
            >
              next&nbsp;
              <span>&raquo;</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

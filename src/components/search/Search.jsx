import React from "react";
import "./search.css";

const Search = ({
  setSearchTerm,
  searchTerm,
  setFilterField,
  filterField,
  selectedFormat,
  cdOption,
}) => {
  function handleSearchSubmit() {
    const searchInput = document.getElementById("search");
    setSearchTerm(searchInput.value);
  }

  // this expression determines the label and input values for the box/track search radio btn, almost correctly
  const boxTrackOption =
    selectedFormat === "compactDiscs" &&
    (cdOption === "singles" || cdOption === "compilations")
      ? "Track"
      : "Box ID";

  return (
    <>
      <h2>Search</h2>
      <fieldset>
        <div className="input-wrapper">
          <label htmlFor="radio-artist">Artist</label>
          <input
            type="radio"
            name="searchField"
            id="radio-artist"
            value="Artist"
            checked={filterField === "Artist"}
            onChange={() => setFilterField("Artist")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="radio-title">Title</label>
          <input
            type="radio"
            name="searchField"
            id="radio-title"
            value="Title"
            checked={filterField === "Title"}
            onChange={() => setFilterField("Title")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="radio-box-id">{boxTrackOption}</label>
          <input
            type="radio"
            name="searchField"
            id="radio-box-id"
            value={boxTrackOption}
            checked={filterField === ("Box ID" || "Track")}
            onChange={() => {
              setFilterField(boxTrackOption);
            }}
          />
        </div>
      </fieldset>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        value={searchTerm}
      />
      <button
        className="searchBtn"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
      <p className="searchP">
        Search currently
        <br />
        works for:
      </p>
      <p className="searchP">records - ALL</p>
      <p className="searchP">cds - main</p>
    </>
  );
};

export default Search;

import React from "react";
import "./search.css";

const Search = ({ setSearchTerm, searchTerm, setFilterField, filterField }) => {
  function handleSearchSubmit() {
    const searchInput = document.getElementById("search");
    setSearchTerm(searchInput.value);
  }

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
          <label htmlFor="radio-box-id">Box ID</label>
          <input
            type="radio"
            name="searchField"
            id="radio-box-id"
            value="Box ID"
            checked={filterField === "Box ID"}
            onChange={() => {
              setFilterField("Box ID");
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
      <p className="searchP">Search currently active for:</p>
      <p className="searchP">cds - main</p>
      <p className="searchP">records - 33s</p>
    </>
  );
};

export default Search;

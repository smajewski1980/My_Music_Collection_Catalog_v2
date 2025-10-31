import React from "react";
import "./search.css";

const Search = ({ setSearchTerm, searchTerm }) => {
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
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="radio-title">Title</label>
          <input
            type="radio"
            name="searchField"
            id="radio-title"
            value="Title"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="radio-box-id">Box ID</label>
          <input
            type="radio"
            name="searchField"
            id="radio-box-id"
            value="Box ID"
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
    </>
  );
};

export default Search;

import React from "react";
import "./search.css";

const Search = ({ setSearch, search }) => {
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
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  );
};

export default Search;

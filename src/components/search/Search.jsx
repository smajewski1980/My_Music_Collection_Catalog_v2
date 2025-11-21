import { useEffect } from "react";
import "./search.css";

const Search = ({
  setSearchTerm,
  searchTerm,
  setFilterField,
  filterField,
  selectedFormat,
  cdOption,
  recordType,
  tapeType,
  searchType,
  setSearchType,
}) => {
  function handleSearchSubmit() {
    const searchInput = document.getElementById("search");
    document.documentElement.style.setProperty(
      "--anim-name-old",
      "filtered-page-out",
    );
    document.documentElement.style.setProperty(
      "--anim-name-new",
      "filtered-page-in",
    );
    setSearchTerm(searchInput.value);
  }

  useEffect(() => {
    setFilterField("Artist");
    document.getElementById("search").value = "";
  }, [selectedFormat, recordType, tapeType, cdOption]);

  // this expression determines the label and input values for the box/track search radio btn
  const boxTrackOption =
    selectedFormat === "compactDiscs" &&
    (cdOption === "singles" || cdOption === "compilations")
      ? "Track"
      : "Box ID";

  function handleSearchTypeSelect() {
    setSearchType("includes");
    if (searchType === "includes") {
      setSearchType("startsWith");
    }
  }

  return (
    <>
      <h2>Search</h2>
      <fieldset>
        <div className='input-wrapper'>
          <label htmlFor='radio-artist'>Artist</label>
          <input
            type='radio'
            name='searchField'
            id='radio-artist'
            value='Artist'
            checked={filterField === "Artist"}
            onChange={() => setFilterField("Artist")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='radio-title'>Title</label>
          <input
            type='radio'
            name='searchField'
            id='radio-title'
            value='Title'
            checked={filterField === "Title"}
            onChange={() => setFilterField("Title")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='radio-box-id'>{boxTrackOption}</label>
          <input
            type='radio'
            name='searchField'
            id='radio-box-id'
            value={boxTrackOption}
            checked={filterField === ("Box ID" || "Track")}
            onChange={() => {
              setFilterField(boxTrackOption);
            }}
          />
        </div>
      </fieldset>
      <input
        type='text'
        name='search'
        id='search'
        autoComplete='off'
        value={searchTerm}
      />
      <p className='searchTypeText'>search target must:</p>
      <div className='input-wrapper'>
        <input
          type='checkbox'
          name='searchType'
          id='searchTypeCheckbox'
          onChange={handleSearchTypeSelect}
          checked={searchType !== "includes" ? false : true}
        />
        <label htmlFor='searchTypeCheckbox'>
          {searchType === "startsWith" ? "start with" : "include"}
        </label>
      </div>
      <p className='searchTypeText'>the search term.</p>
      <button
        className='searchBtn'
        onClick={handleSearchSubmit}
      >
        Search
      </button>
      <p className='searchP'>CD Singles and Comps not searchable yet.</p>
    </>
  );
};

export default Search;
